from django.shortcuts import render, redirect
from django.http import HttpResponse
#from django.templates import loader
from django.views import View
from .models import *
import json
import requests
import time

class	GetDataView(View):
	id = 'u-s4t2ud-704d2685a6d5772b24b1c01b713439a29f2ebc33f8ec8ac99d27305213871b3c'
	secret = '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'
	redirect = 'https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-704d2685a6d5772b24b1c01b713439a29f2ebc33f8ec8ac99d27305213871b3c&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fcode&response_type=code'
	def get(self, request):
		code = request.GET.get('code', None)
		if code == None:
			return HttpResponse('no code!')
		data = {'grant_type': 'authorization_code', 'client_id': self.id,'client_secret': self.secret, 'code': code, 'redirect_uri': 'http://localhost:8000/login', 'scope': 'public'}
		print(data)
		token = requests.post('https://api.intra.42.fr/v2/oauth/token', data=data)
		if token == None:
			return HttpResponse('error!')
		print(token)
		res = requests.get("https://api.intra.42.fr/v2/users/131690/projects_users", headers={'Authorization': 'Bearer ' + token.json()['access_token']})
		if res == None:
			return HttpResponse('error!')
		res_d = res.json()
		print("yooh's projects")
		for projects in res.json():
			print(f'project_name: {projects["project"]["name"]}, final_mark: {projects["teams"][-1]["final_mark"]}', end='\n')
		return HttpResponse(res)

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
