from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponseNotFound, HttpResponse
from django.views import View
from cryptography.fernet import Fernet

from datetime import timedelta
import json
import requests
import time
from .models import User42, OpenSlot

key = b'Zf3NDyN344q5gAf4L8VYdElc1lRX2-7KrEqDSYuUmDI='
fernet = Fernet(key)

class	Init(View):
	def get(self, request):
		return render(request, 'index.html')

class	ApiLogin(View):
	id = 'u-s4t2ud-704d2685a6d5772b24b1c01b713439a29f2ebc33f8ec8ac99d27305213871b3c'
	secret = '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'
	uri = 'http://localhost:5173'
	def get(self, request):
		quary_dict = request.GET
		try:
			code = quary_dict['code']
			data = {'grant_type': 'authorization_code', 'client_id': self.id,'client_secret': self.secret, 'code': code, 'redirect_uri': self.uri, 'scope': 'public'}
			res = requests.post('https://api.intra.42.fr/v2/oauth/token', data=data)
			res.raise_for_status()
		except:
			return HttpResponse('Unauthorized', status=401)
		token = res.json().get('access_token')
		try:
			res = requests.get("https://api.intra.42.fr/v2/me", headers={'Authorization': 'Bearer ' + token})
			res.raise_for_status()
		except:
			return HttpResponse('Unauthorized', status=401)
		res = res.json()
		try:
			me = User42.objects.get(id=res['id'])
		except:
			me = User42(id=res['id'])
			try:
				coa = requests.get("https://api.intra.42.fr/v2/users/" + str(me.id) + "/coalitions", headers={'Authorization': 'Bearer ' + token})
				coa.raise_for_status()
			except:
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
		return JsonResponse({'token': me.token, 'login': me.login, 'image': me.image, 'coa': me.coa, 'level': me.level,'projects': projects})

class ApiRank(View):
	def get(self, request):
		try:
			User42.objects.get(token=request.GET.get('token'))
		except:
			return HttpResponse('Unauthorized', status=401)
		users = list(User42.objects.all().order_by('-total_time', '-mentor_cnt', '-total_feedback', 'id').values('login', 'coa', 'total_time', 'total_feedback')[:3])
		return JsonResponse({'rank': users})

class ApiSlot(View):
	def get(self, request):
		try:
			User42.objects.get(token=request.GET.get('token'))
		except:
			return HttpResponse('Unauthorized', status=401)
		slots = list(OpenSlot.objects.exclude(left=0).values('id', 'mentor', 'subject', 'max', 'curr', 'start', 'end', 'description'))
		for slot in slots:
			slot['mentor'] = list(User42.objects.filter(login=slot['mentor']).values('login', 'image', 'coa', 'level', 'total_feedback'))[0]
		return JsonResponse({'slots': slots})
	def post(self, request):
		# try:
		#User42.objects.get(token=request.POST.get('token'))
		body = json.loads(request.body)
		print(body)
		newSlot = OpenSlot(mentor=body['login'], subject=body['subject'], max=body['max'], left=body['max'], start=body['start'], end=body['end'], description=body['description'])
		newSlot.save()
		slots = list(OpenSlot.objects.exclude(left=0).values('id', 'mentor', 'subject', 'max', 'curr', 'start', 'end', 'description'))
		for slot in slots:
			slot['mentor'] = list(User42.objects.filter(login=slot['mentor']).values('login', 'image', 'coa', 'level', 'total_feedback'))[0]
		return JsonResponse({'slots': slots})
		# except:
		# 	return HttpResponse('Unauthorized', status=401)
	def put(self, request):
			User42.objects.get(token=request.PUT.get('token'))
			body = json.loads(request.body)
			toPart = OpenSlot.objects.get(id=body['id'])
			mentee =  User42.objects.get(login=body['mentee'])
			if toPart.left == 0:
				raise
			toPart.left -= 1
			if toPart.curr == 0:
				toPart.mentee1 = mentee.login
			if toPart.curr == 1:
				toPart.mentee2 = mentee.login
			if toPart.curr == 2:
				toPart.mentee3 = mentee.login
			if toPart.curr == 3:
				toPart.mentee4 = mentee.login
			toPart.curr += 1
			toPart.save()
			slots = list(OpenSlot.objects.exclude(left=0).values('id', 'mentor', 'subject', 'bonus', 'max', 'curr', 'start', 'end', 'description'))
			for slot in slots:
				slot['mentor'] = list(User42.objects.filter(login=slot['mentor']).values('login', 'image', 'coa', 'level', 'total_feedback'))[0]
			return JsonResponse({'slots': slots})
	def patch(self, request):
			#User42.objects.get(token=request.PATCH.get('token'))
			body = json.loads(request.body)
			toPart = OpenSlot.objects.get(id=body['id'])
			mentee =  User42.objects.get(login=body['mentee'])
			if toPart.curr == 0:
				raise
			toPart.curr -= 1
			if toPart.curr == 0:
				toPart.mentee1 = mentee.login
			if toPart.curr == 1:
				toPart.mentee2 = mentee.login
			if toPart.curr == 2:
				toPart.mentee3 = mentee.login
			if toPart.curr == 3:
				toPart.mentee4 = mentee.login
			toPart.curr += 1
			toPart.save()
			slots = list(OpenSlot.objects.exclude(left=0).values('id', 'mentor', 'subject', 'bonus', 'max', 'curr', 'start', 'end', 'description'))
			for slot in slots:
				slot['mentor'] = list(User42.objects.filter(login=slot['mentor']).values('login', 'image', 'coa', 'level', 'total_feedback'))[0]
			return JsonResponse({'slots': slots})
	def delete(self, request):
		try:
			mentor = User42.objects.get(token=request.DELETE.get('token'))
			body = json.loads(request.body)
			toDelete = OpenSlot.objects.get(id=body['id'])
			if toDelete.mentor != mentor.login:
				raise
			toDelete.delete()
			slots = list(OpenSlot.objects.exclude(left=0).values('id', 'mentor', 'subject', 'bonus', 'max', 'curr', 'start', 'end', 'description'))
			for slot in slots:
				slot['mentor'] = list(User42.objects.filter(login=slot['mentor']).values('login', 'image', 'coa', 'level', 'total_feedback'))[0]
			return JsonResponse({'slots': slots})
		except:
			return HttpResponse('Unauthorized', status=401)

from django.db.models import Q

class ApiSlotMe(View):
	def get(self, request):
		try:
			login = User42.objects.get(token=request.GET.get('token')).login
		except:
			return HttpResponse('Unauthorized', status=401)
		myslots = list(OpenSlot.objects.filter(Q(mentor=login) | Q(mentee1=login) | Q(mentee2=login) | Q(mentee3=login) | Q(mentee4=login)).values('id', 'mentor', 'subject', 'mentee1', 'mentee2', 'mentee3', 'mentee4', 'start', 'end'))
		return HttpResponse({'myslots': myslots})

class Dev(View):
	id = 'u-s4t2ud-97752de4d75913a94e9887dbe2f66519abe99042fba7fc73fe3f7e1340602529'
	secret = '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'
	uri = 'http://localhost:8000'
	url = 'https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-97752de4d75913a94e9887dbe2f66519abe99042fba7fc73fe3f7e1340602529&redirect_uri=http%3A%2F%2Flocalhost%3A8000&response_type=code'
	def get(self, request):
		return HttpResponse({})
	
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