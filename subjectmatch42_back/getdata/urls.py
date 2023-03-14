from django.urls import path
from . import views
#from getdata.views import GetDataView

urlpatterns = [
    path('', views.index, name='index'),
]
