from django.urls import path, re_path
from . import views


urlpatterns = [
    path('login/', views.Login.as_view(), name = 'login'),
    path('', views.redirecct_login, name = 'redirect_to_login'),
    #path('', views.index, name='index'),
]
