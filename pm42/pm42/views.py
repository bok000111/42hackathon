from django.shortcuts import render
from django.http import JsonResponse, HttpResponseNotFound
from django.views import View
from cryptography.fernet import Fernet
import json
import requests
import time

class	Init(View):
	def get(self, request):
		return render(request, 'index.html')

class	Api(View):
	id = 'u-s4t2ud-704d2685a6d5772b24b1c01b713439a29f2ebc33f8ec8ac99d27305213871b3c'
	secret = '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'
	redirect_uri = 'http://localhost:8000'
	key = b'Zf3NDyN344q5gAf4L8VYdElc1lRX2-7KrEqDSYuUmDI='
	def apiMe(self, requset, code, token):
		if token is None:
			return HttpResponseNotFound('404notfound')
		token = Fernet(self.key).decrypt(token)
		data = requests.get("https://api.intra.42.fr/v2/me", headers={'Authorization': 'Bearer ' + token}).json()
		projects = [{'name': x['project']['name'], 'final_mark': x['final_mark']} for x in data['projects_users'] if x['validated?'] and 'C Piscine' not in x['project']['name'] and 'Exam' not in x['project']['name']]
		mydata = {'login': data['login'], 'image': data['image']['link'], 'project': projects}
		return JsonResponse(mydata)
	def getToken(self, requset, code, token):
		if code is None:
			return HttpResponseNotFound('404notfound')
		data = {'grant_type': 'authorization_code', 'client_id': self.id,'client_secret': self.secret, 'code': code, 'redirect_uri': self.redirect_uri, 'scope': 'public'}
		token = requests.post('https://api.intra.42.fr/v2/oauth/token', data=data).json()['access_token']
		token = Fernet(self.key).encrypt(token)
		return JsonResponse({'token': token})
	def get(self, request, name=None):
		quary_dict = request.GET
		if name is None or self.api_list.get(name) is None:
			return HttpResponseNotFound('404notfound')
		elif	quary_dict.get('code') is None and quary_dict.get('encrypted_token') is None:
			return HttpResponseNotFound('404notfound')
		return self.api_list.get(name)(request, quary_dict.get('code'), quary_dict.get('access_token'))
	api_list = {'gettoken': getToken, 'me': apiMe}