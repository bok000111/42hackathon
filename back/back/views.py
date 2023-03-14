from django.shortcuts import render
from django.http import JsonResponse, HttpResponseNotFound
#from django.templates import loader
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

# class	GetMe(View):
# 	def	get(self, request):
# 		access_token = request.GET.get('access_token', None)
# 		if access_token is None:
# 			return (HttpResponse("asdasd"))
# 		print(access_token)
# 		data = requests.get("https://api.intra.42.fr/v2/me", headers={'Authorization': 'Bearer ' + access_token}).json()
# 		projects = [{'name': x['project']['name'], 'final_mark': x['final_mark']} for x in data['projects_users'] if x['validated?'] and 'C Piscine' not in x['project']['name'] and 'Exam' not in x['project']['name']]
# 		mydata = {'login': data['login'], 'image': data['image']['link'], 'project': projects}
# 		return JsonResponse(mydata)

# class	Main(View):
# 	id = 'u-s4t2ud-704d2685a6d5772b24b1c01b713439a29f2ebc33f8ec8ac99d27305213871b3c'
# 	secret = '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'
# 	redirect_uri = 'http://localhost:8000'
# 	def	get(self, request):
# 		access_token = request.COOKIES.get('access_token', None)
# 		if access_token is not None:
# 			return redirect('login')
# 		data = requests.get("https://api.intra.42.fr/v2/me", headers={'Authorization': 'Bearer ' + access_token}).json()
# 		projects = [{'name': x['project']['name'], 'final_mark': x['final_mark']} for x in data['projects_users'] if x['validated?'] and 'C Piscine' not in x['project']['name'] and 'Exam' not in x['project']['name']]
# 		mydata = {'login': data['login'], 'image': data['image']['link'], 'project': projects}
# 		return JsonResponse(mydata)

# class	Login(View):
# 	id = 'u-s4t2ud-704d2685a6d5772b24b1c01b713439a29f2ebc33f8ec8ac99d27305213871b3c'
# 	secret = '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'
# 	redirect_uri = 'http://localhost:8000/login'
# 	redirect_to = 'http://localhost:5173/main'
# 	default_redirect = 'https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-704d2685a6d5772b24b1c01b713439a29f2ebc33f8ec8ac99d27305213871b3c&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Flogin&response_type=code'
# 	def	get(self, request):
# 		code = request.GET.get('code', None)
# 		access_token = request.COOKIES.get('access_token', None)
# 		if code is None:
# 			return HttpResponse("asd")
# 		data = {'grant_type': 'authorization_code', 'client_id': self.id,'client_secret': self.secret, 'code': code, 'redirect_uri': self.redirect_uri, 'scope': 'public'}
# 		access_token = requests.post('https://api.intra.42.fr/v2/oauth/token', data=data).json()['access_token']
# 		request.COOKIES['access_token'] = access_token
# 		ret = redirect(self.redirect_to)
# 		ret.set_cookie(key='access_token', value=access_token)
# 		return ret

# def redirecct_login(request):
# 	access_token = request.COOKIES.get('access_token', None)
# 	if access_token is None:
# 		return render(request, 'index.html')
# 	return redirect('')

# def index(request):
#  #   latest_question_list = Question.objects.order_by('-pub_date')[:5]
#   #  template = loader.get_template('getdata/index.html')
#    # context = {
#     #    'latest_question_list': latest_question_list,
#     #}
#     return render(request, 'getdata/index.html', {'test': 'test', 'Respnose': 'r'})
#     #return HttpResponse(template.render(context, request), {'test': 'test', 'Respnose': 'r'})
# #template = loader.get_template()
