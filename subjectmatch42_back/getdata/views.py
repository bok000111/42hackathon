from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
import json
import requests
import time

class	GetDataView(View):
	def get(self, request):
		id = 'u-s4t2ud-704d2685a6d5772b24b1c01b713439a29f2ebc33f8ec8ac99d27305213871b3c'
		secret = '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'
		code = str(request.GET.get('code', None))
		if code == None:
			return HttpResponse('error!')
		data = {'grant_type': 'client_credentials', 'client_id': id,'client_secret': secret}
		print(data)
		token = requests.post('https://api.intra.42.fr/v2/oauth/token', data=data)
		if token == None:
			return HttpResponse('error!')
		print(token.text)
		time.sleep(1)
		res = requests.get("https://api.intra.42.fr/v2/users/", headers={'Authorization': 'Bearer ' + "access_token" + "d56fbf336f8253a8ffcef3d798ccdd639b3fc70f2140cfe91da004f2d24317c9"})
		print(res)
		return HttpResponse(token)