from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponse
from django.views import View
from cryptography.fernet import Fernet

import json
import requests
from requests.exceptions import HTTPError
import time
from .models import User42, OpenSlot

key = b'Zf3NDyN344q5gAf4L8VYdElc1lRX2-7KrEqDSYuUmDI='
fernet = Fernet(key)

class	Init(View):
	def get(self, request):
		return render(request, 'index.html')

class	ApiLogin(View):
	#프론트서버용
	id = 'u-s4t2ud-704d2685a6d5772b24b1c01b713439a29f2ebc33f8ec8ac99d27305213871b3c'
	secret = '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'
	uri = 'http://localhost:5173'
	url = 'https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-704d2685a6d5772b24b1c01b713439a29f2ebc33f8ec8ac99d27305213871b3c&redirect_uri=http%3A%2F%2Flocalhost%3A5173&response_type=code'
	
	#배포용
	#id = 'u-s4t2ud-97752de4d75913a94e9887dbe2f66519abe99042fba7fc73fe3f7e1340602529'
	#secret = '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'
	#uri = 'http://localhost:8000'
	#url = 'https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-97752de4d75913a94e9887dbe2f66519abe99042fba7fc73fe3f7e1340602529&redirect_uri=http%3A%2F%2Flocalhost%3A8000&response_type=code'
	def get(self, request):
		quary_dict = request.GET
		try:
			code = quary_dict['code']
			data = {'grant_type': 'authorization_code', 'client_id': self.id,'client_secret': self.secret, 'code': code, 'redirect_uri': self.uri, 'scope': 'public'}
			res = requests.post('https://api.intra.42.fr/v2/oauth/token', data=data)
			res.raise_for_status()
		except:
			res = redirect(self.url)
			return res
		token = res.json().get('access_token')
		try:
			res = requests.get("https://api.intra.42.fr/v2/me", headers={'Authorization': 'Bearer ' + token})
			res.raise_for_status()
		except HTTPError:
			return HttpResponse('Unauthorized', status=401)
		res = res.json()
		try:
			me = User42.objects.get(id=res['id'])
		except:
			me = User42(id=res['id'])
			try:
				coa = requests.get("https://api.intra.42.fr/v2/users/" + str(me.id) + "/coalitions", headers={'Authorization': 'Bearer ' + token})
				coa.raise_for_status()
			except HTTPError:
				return HttpResponse('Unauthorized', status=401)
			me.coa = coa.json()[0]['slug']
		me.login = res['login']
		me.image = res["image"]["link"]
		for cursus in res.get("cursus_users"):
			if cursus.get('grade') is not None:
				me.level = cursus.get('level')
		me.token = fernet.encrypt(token.encode()).decode()
		print(me.token)
		me.save()
		time.sleep(1)
		projects = [{'name': x['project']['name'], 'final_mark': x['final_mark'], 'marked_at': x['marked_at']} for x in res['projects_users'] if x['validated?'] and 'C Piscine' not in x['project']['name'] and 'Exam' not in x['project']['name']]
		return JsonResponse({'token': me.token, 'login': me.login, 'image': me.image, 'coa': me.coa, 'level': me.level, 'total_feedback': me.total_feedback, 'description': me.description, 'projects': projects})
	def post(self, request):
		try:
			me = User42.objects.get(token=request.GET.get('token'))
			body = json.loads(request.body)
			if me.login != body['login']:
				raise
			me.description = body['description']
			me.save()
		except User42.DoesNotExist:
			return HttpResponse('user not found', status=404)
		return HttpResponse('Ok', status=200)

class ApiRank(View):
	def get(self, request):
		try:
			User42.objects.get(token=request.GET.get('token'))
		except:
			return HttpResponse('Unauthorized', status=401)
		users = list(User42.objects.all().order_by('-total_time', '-mentor_cnt', '-total_feedback', 'id').values('login', 'coa', 'total_time', 'total_feedback')[:3])
		return JsonResponse({'rank': users})

from datetime import datetime, timezone
import pytz

class ApiSlot(View):
	def isDel(self, slot: OpenSlot) -> bool:
		now = datetime.now(pytz.timezone('Asia/Seoul'))
		index = now.weekday() * 24 * 4 + now.hour * 4 + now.minute // 15
		if slot['start'] < index:
			return False
		return True
	def SlotAll(self):
		slots = list(OpenSlot.objects.all().values('id', 'mentor', 'subject', 'mentees', 'max', 'curr', 'start', 'end', 'description'))
		#slots = [x for x in slots if self.isDel(x)]
		for slot in slots:
			try:
				mento = User42.objects.get(login=slot['mentor'])
				slot['mentor'] = {'login': mento.login, 'image': mento.image, 'coa': mento.coa, 'level': mento.level, 'total_feedback': mento.total_feedback, 'description': mento.description}
			except User42.DoesNotExist:
				return HttpResponse('mentor not found', status=404)
		return JsonResponse({'slots': slots})
	def get(self, request):
		try:
			User42.objects.get(token=request.GET.get('token'))
		except:
			return HttpResponse('Unauthorized', status=401)
		return self.SlotAll()
	def post(self, request):
		try:
			mentor = User42.objects.get(token=request.GET.get('token'))
			body = json.loads(request.body)
			# if mentor.login != body['login']:
			# 	raise
		except:
			return HttpResponse('Unauthorized', status=401)
		newSlot = OpenSlot(mentor=body['login'], subject=body['subject'], max=body['max'], left=body['max'], start=body['start'], end=body['end'], description=body['description'])
		newSlot.save()
		return self.SlotAll()
		#return HttpResponse('Ok', status=200)
	def put(self, request):
		try:
			Slot = OpenSlot.objects.get(id=body['id'])
			mentor = User42.objects.get(login=Slot.mentor)
			mentees = Slot.mentees.split(' ')
			body = json.loads(request.body)
			# if mentee.login not in mentees:
			# 	raise
			# if mentor.login != body['login']:
			# 	raise
			mentees.remove(body['login'])
		except:
			return HttpResponse('Unauthorized', status=401)
		Slot.finished += 1
		mentor.feedback1 += body['1']
		mentor.feedback2 += body['2']
		mentor.feedback3 += body['3']
		mentor.feedback4 += body['4']
		mentor.feedback5 += body['5']
		mentor.total_feedback += body['1'] + body['2'] + body['3'] + body['4'] + body['5']
		if Slot.curr == Slot.finished:
			mentor.total_time += Slot.end - Slot.start
			Slot.delete()
		else:
			Slot.mentees = ' '.join(mentees)
			Slot.save()
		mentor.save()
		return self.SlotAll()
		#return HttpResponse('Ok', status=200)
	def patch(self, request):
		try:
			mentee = User42.objects.get(token=request.GET.get('token'))
			body = json.loads(request.body)
			Slot = OpenSlot.objects.get(id=body['id'])
			# if mentee.login != body['mentee'] or Slot.mentor == mentee.login:
			# 	raise
		except:
			return HttpResponse('Unauthorized', status=401)
		mentees = Slot.mentees.split(' ')
		if mentee.login in mentees:
			mentees.remove(mentee.login)
			Slot.curr -= 1;
			Slot.left += 1;
			if Slot.curr == 0:
				Slot.mentees = ''
			else:
				Slot.mentees = ' '.join(mentees)
		else:
			mentees.append(mentee.login)
			Slot.curr += 1;
			Slot.left -= 1;
			if Slot.curr == 1:
				Slot.mentees = mentee.login
			else:
				Slot.mentees = ' '.join(mentees)
		Slot.save()
		return self.SlotAll()
		#return HttpResponse('Ok', status=200)
	def update(self, request):
		try:
			mentee = User42.objects.get(token=request.GET.get('token'))
			body = json.loads(request.body)
			Slot = OpenSlot.objects.get(id=body['id'])
			mento = User42.objects.get(login=Slot.mentor)
			# if mentee.login != body['mentee'] or Slot.mentor == mentee.login:
			# 	raise
			mentees = Slot.mentees.split(' ')
			if mentee.login in mentees:
				mentees.remove(mentee.login)
			# else:
			# 	raise
		except:
			return HttpResponse('Unauthorized', status=401)
		Slot.finished += 1
		mento.total_feedback += body['feedback1'] + body['feedback2'] + body['feedback3'] + body['feedback4'] + body['feedback5']
		mento.feedback1 += body['feedback1']
		mento.feedback2 += body['feedback2']
		mento.feedback3 += body['feedback3']
		mento.feedback4 += body['feedback4']
		mento.feedback5 += body['feedback5']
		if Slot.finished == Slot.max:
			mento.total_time += Slot.end - Slot.start
			mento.save()
			Slot.delete()
		else:
			mento.save()
			Slot.mentees = mentees
			Slot.save()
		return self.SlotAll()
		#return HttpResponse('Ok', status=200)
	def delete(self, request):
		try:
			mentor = User42.objects.get(token=request.GET.get('token'))
			body = json.loads(request.body)
			toDelete = OpenSlot.objects.get(id=body['id'])
			if toDelete.mentor != mentor.login:
				raise
		except:
			return HttpResponse('Unauthorized', status=401)
		toDelete.delete()
		return self.SlotAll()
		#return HttpResponse('Ok', status=200)

class ApiSlotMe(View):
	def get(self, request):
		try:
			login = User42.objects.get(token=request.GET.get('token')).login
		except:
			return HttpResponse('Unauthorized', status=401)
		myslots = list(OpenSlot.objects.all().values('id', 'mentor', 'subject', 'mentees', 'start', 'end'))
		myslots = [x for x in myslots if login in x['mentees'].split(' ') or login is x['mentor']]
		return HttpResponse({'myslots': myslots})

class Dev(View):
	id = 'u-s4t2ud-97752de4d75913a94e9887dbe2f66519abe99042fba7fc73fe3f7e1340602529'
	secret = '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'
	uri = 'http://localhost:8000'
	url = 'https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-97752de4d75913a94e9887dbe2f66519abe99042fba7fc73fe3f7e1340602529&redirect_uri=http%3A%2F%2Flocalhost%3A8000&response_type=code'
	def get(self, request):
		try:
			code = request.GET['code']
		except:
			return redirect(self.url)
		requests.get(self.url, cookies=request.COOKIES)
		data = {'grant_type': 'authorization_code', 'client_id': self.id,'client_secret': self.secret, 'code': code, 'redirect_uri': self.uri, 'scope': 'public'}
		try:
			token = requests.post('https://api.intra.42.fr/v2/oauth/token', data=data).json().get('access_token')
		except:
			return HttpResponse('Unauthorized', status=401)
		return JsonResponse({'token': token})
	
		#test GET api/slot/
		slots = list(OpenSlot.objects.exclude(left=0).values('id', 'mentor', 'subject', 'bonus', 'max', 'curr', 'start', 'end', 'description'))
		for slot in slots:
			slot['mentor'] = list(User42.objects.filter(login=slot['mentor']).values('login', 'image', 'coa', 'level', 'total_feedback'))[0]
		return JsonResponse({'slots': slots})

		#test api/rank/
		# users = list(User42.objects.all().order_by('-total_time', '-mentor_cnt', '-total_feedback', 'id').values('login', 'coa', 'total_time', 'total_feedback')[:3])
		# return JsonResponse({'rank': users})

		#test api/token/ and api/me/	
		# quary_dict = request.GET
		# code = quary_dict.get('code')
		# if code is None:
		# 	redirect(self.url)
		# data = {'grant_type': 'authorization_code', 'client_id': self.id,'client_secret': self.secret, 'code': code, 'redirect_uri': self.uri, 'scope': 'public'}
		# token = requests.post('https://api.intra.42.fr/v2/oauth/token', data=data).json().get('access_token')
		# if token is None:
		# 	return HttpResponseNotFound("auth fail:(")
		# res = requests.get("https://api.intra.42.fr/v2/me", headers={'Authorization': 'Bearer ' + token})
		# res = res.json()
		# try:
		# 	me = User42.objects.get(id=res['id'])
		# except:
		# 	me = User42(id=res['id'])
		# 	try:
		# 		time.sleep(1)
		# 		coa = requests.get("https://api.intra.42.fr/v2/users/" + str(me.id) + "/coalitions", headers={'Authorization': 'Bearer ' + token})
		# 		coa.raise_for_status()
		# 	except:
		# 		return HttpResponse('Unauthorized', status=401)
		# 	me.coa = coa.json()[0]['slug']
		# me.login=res['login']
		# me.image = res.get("image").get("link")
		# for cursus in res.get("cursus_users"):
		# 	if cursus.get('grade') is not None:
		# 		me.level = cursus.get('level')
		# me.token = Fernet(key).encrypt(token.encode('utf-8'))
		# me.save()
		# projects = [{'name': x['project']['name'], 'final_mark': x['final_mark'], 'marked_at': x['marked_at']} for x in res['projects_users'] if x['validated?'] and 'C Piscine' not in x['project']['name'] and 'Exam' not in x['project']['name']]
		# return JsonResponse({'login': me.login, 'image': me.image, 'coa': me.coa, 'level': me.level,'projects': projects})