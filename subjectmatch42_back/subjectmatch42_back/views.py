from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
#from django.templates import loader
from django.views import View
import json
import requests
import time

class	Main(View):
	id = 'u-s4t2ud-704d2685a6d5772b24b1c01b713439a29f2ebc33f8ec8ac99d27305213871b3c'
	secret = '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'
	redirect_uri = 'http://localhost:8000/login'
	def	get(self, request):
		code = request.GET.get('code', None)
		if code is None:
			return redirect('/login/')
		data = {'grant_type': 'authorization_code', 'client_id': self.id,'client_secret': self.secret, 'code': code, 'redirect_uri': self.redirect_uri, 'scope': 'public'}
		token = requests.post('https://api.intra.42.fr/v2/oauth/token', data=data).json()['access_token']
		data = requests.get("https://api.intra.42.fr/v2/me", headers={'Authorization': 'Bearer ' + token}).json()
		projects = [{'name': x['project']['name'], 'final_mark': x['final_mark']} for x in data['projects_users'] if x['validated?'] and 'C Piscine' not in x['project']['name'] and 'Exam' not in x['project']['name']]
		mydata = {'login': data['login'], 'image': data['image']['link'], 'project': projects}
		print(mydata)
		for x in projects:
		 	print(x)
		return JsonResponse(mydata)

class	Login(View):
	id = 'u-s4t2ud-704d2685a6d5772b24b1c01b713439a29f2ebc33f8ec8ac99d27305213871b3c'
	secret = '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'
	redirect_uri = 'http://localhost:8000/login'
	default_redirect = 'https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-704d2685a6d5772b24b1c01b713439a29f2ebc33f8ec8ac99d27305213871b3c&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Flogin&response_type=code'
	def	get(self, request):
		code = request.GET.get('code', None)
		access_token = request.COOKIES.get('access_token', None)
		if code is None or access_token is not None:
			return render(request, 'index.html')
		data = {'grant_type': 'authorization_code', 'client_id': self.id,'client_secret': self.secret, 'code': code, 'redirect_uri': self.redirect_uri, 'scope': 'public'}
		access_token = requests.post('https://api.intra.42.fr/v2/oauth/token', data=data).json()['access_token']
		ret = render(request, 'index.html')
		ret.set_cookie(key='access_token', value=access_token)
		return ret

def redirecct_login(request):
	return redirect('/login/')

def index(request):
 #   latest_question_list = Question.objects.order_by('-pub_date')[:5]
  #  template = loader.get_template('getdata/index.html')
   # context = {
    #    'latest_question_list': latest_question_list,
    #}
    return render(request, 'getdata/index.html', {'test': 'test', 'Respnose': 'r'})
    #return HttpResponse(template.render(context, request), {'test': 'test', 'Respnose': 'r'})
#template = loader.get_template()
