from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
import json
import requests
import time

class	GetDataView(View):
	id = 'u-s4t2ud-704d2685a6d5772b24b1c01b713439a29f2ebc33f8ec8ac99d27305213871b3c'
	secret = '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'
	def get(self, request):
		code = request.GET.get('code', None)
		if code == None:
			return HttpResponse('error!')
		data = {'grant_type': 'authorization_code', 'client_id': self.id,'client_secret': self.secret, 'code': code, 'redirect_uri': 'http://localhost:8000/code', 'scope': 'public'}
		print(data)
		token = requests.post('https://api.intra.42.fr/v2/oauth/token', data=data)
		if token == None:
			return HttpResponse('error!')
		res = requests.get("https://api.intra.42.fr/v2/users/131690/projects_users", headers={'Authorization': 'Bearer ' + token.json()['access_token']})
		if res == None:
			return HttpResponse('error!')
		res_d = res.json()
		print("yooh's projects")
		for projects in res.json():
			print(f'project_name: {projects["project"]["name"]}, final_mark: {projects["teams"][-1]["final_mark"]}', end='\n')
		return HttpResponse(res)