from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponseNotFound, HttpResponse
from django.views import View
from cryptography.fernet import Fernet
from .models import User42
import json
import requests
import datetime

key = b'Zf3NDyN344q5gAf4L8VYdElc1lRX2-7KrEqDSYuUmDI='

class	Init(View):
	def get(self, request):
		return render(request, 'index.html')

	# def apiMe(self, requset, code, token):
	# 	if token is None:
	# 		return HttpResponseNotFound('404notfound')
	# 	token = Fernet(self.key).decrypt(token)
	# 	data = requests.get("https://api.intra.42.fr/v2/me", headers={'Authorization': 'Bearer ' + token}).json()
	# 	projects = [{'name': x['project']['name'], 'final_mark': x['final_mark']} for x in data['projects_users'] if x['validated?'] and 'C Piscine' not in x['project']['name'] and 'Exam' not in x['project']['name']]
	# 	mydata = {'login': data['login'], 'image': data['image']['link'], 'project': projects}
	# 	return JsonResponse(mydata)
	# def getToken(self, requset, code, token):
	# 	if code is None:
	# 		return HttpResponseNotFound('404notfound')
	# 	data = {'grant_type': 'authorization_code', 'client_id': self.id,'client_secret': self.secret, 'code': code, 'redirect_uri': self.redirect_uri, 'scope': 'public'}
	# 	token = requests.post('https://api.intra.42.fr/v2/oauth/token', data=data).json()['access_token']
	# 	token = Fernet(self.key).encrypt(token)
	# 	return JsonResponse({'token': token})


			# elif apiname == 'me':
			# 	token = quary_dict.get('token')
			# 	if token is None:
			# 		return res
			# 	token = Fernet(self.key).decrypt(token.encode('utf-8')).decode('utf-8')
			# 	res = requests.get("https://api.intra.42.fr/v2/me", headers={'Authorization': 'Bearer ' + token})
			# 	res.raise_for_status()
			# 	res = res.json()
			# 	try:
			# 		me = User42().objects.get(login=res['login'])
			# 	except:
			# 		me = User42()
			# 	projects = [{'name': x['project']['name'], 'final_mark': x['final_mark']} for x in res['projects_users'] if x['validated?'] and 'C Piscine' not in x['project']['name'] and 'Exam' not in x['project']['name']]
			# 	UserData = {'login': res['login'], 'image': res['image']['link'], 'project': projects}

		# return JsonResponse({'token': token})
		# data = {'grant_type': 'authorization_code', 'client_id': self.id,'client_secret': self.secret, 'code': code, 'redirect_uri': self.redirect_uri, 'scope': 'public'}
		# token = requests.post('https://api.intra.42.fr/v2/oauth/token', data=data).json()['access_token']
		# token = Fernet(self.key).encrypt(token.encode('utf-8')).decode('utf-8')
		# return JsonResponse({'token': token})
		# return self.api_list.get(apiname)(request, quary_dict.get('code'), quary_dict.get('access_token'))

class	ApiToken(View):
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
		token = Fernet(key).encrypt(token.encode('utf-8')).decode('utf-8')
		return JsonResponse({'token': token})

class ApiMe(View):
	def get(self, request):
		quary_dict = request.GET
		try:
			token = quary_dict['token']
			decrypted = Fernet(key).decrypt(token.encode('utf-8')).decode('utf-8')
			res = requests.get("https://api.intra.42.fr/v2/me", headers={'Authorization': 'Bearer ' + decrypted})
			res.raise_for_status()
		except:
			return HttpResponse('Unauthorized', status=401)
		res = res.json()
		login = res['login']
		try:
			me = User42().objects.get(login=login)
		except:
			me = User42(login=login)
		me.image = res.get("image").get("link")
		for cursus in res.get("cursus_users"):
			if cursus.get('grade') is not None:
				me.level = cursus.get('level')
		me.token = token.encode()
		#me.save()
		projects = [{'name': x['project']['name'], 'final_mark': x['final_mark'], 'marked_at': x['marked_at']} for x in res['projects_users'] if x['validated?'] and 'C Piscine' not in x['project']['name'] and 'Exam' not in x['project']['name']]
		return JsonResponse({'login': me.login, 'image': me.image, 'level': me.level,'projects': projects})



class Dev(View):
	id = 'u-s4t2ud-97752de4d75913a94e9887dbe2f66519abe99042fba7fc73fe3f7e1340602529'
	secret = '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'
	uri = 'http://localhost:8000'
	url = 'https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-97752de4d75913a94e9887dbe2f66519abe99042fba7fc73fe3f7e1340602529&redirect_uri=http%3A%2F%2Flocalhost%3A8000&response_type=code'
	def get(self, request):
		quary_dict = request.GET
		code = quary_dict.get('code')
		if code is None:
			redirect(self.url)
		data = {'grant_type': 'authorization_code', 'client_id': self.id,'client_secret': self.secret, 'code': code, 'redirect_uri': self.uri, 'scope': 'public'}
		token = requests.post('https://api.intra.42.fr/v2/oauth/token', data=data).json().get('access_token')
		if token is None:
			return HttpResponseNotFound("auth fail:(")
		token = Fernet(key).encrypt(token.encode('utf-8')).decode('utf-8')
		print(token)
		print()
		token = Fernet(key).decrypt(token.encode('utf-8')).decode('utf-8')
		print(token)
		print()
		res = requests.get("https://api.intra.42.fr/v2/me", headers={'Authorization': 'Bearer ' + token})
		res = res.json()
		login = res['login']
		try:
			me = User42().objects.get(login=login)
		except:
			me = User42(login=login)
		me.image = res.get("image").get("link")
		for cursus in res.get("cursus_users"):
			if cursus.get('grade') is not None:
				me.level = cursus.get('level')
		me.token = token.encode()
		#me.save()
		projects = [{'name': x['project']['name'], 'final_mark': x['final_mark'], 'marked_at': x['marked_at']} for x in res['projects_users'] if x['validated?'] and 'C Piscine' not in x['project']['name'] and 'Exam' not in x['project']['name']]
		return JsonResponse({'login': me.login, 'image': me.image, 'level': me.level,'projects': projects})