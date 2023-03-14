from django.urls import path, re_path
#from . import views
from getdata.views import GetDataView, redirecct_login

urlpatterns = [
    path('login/', GetDataView.as_view(), name = 'login'),
    path('', redirecct_login, name = 'redirect_to_login'),
    #path('', views.index, name='index'),
]
