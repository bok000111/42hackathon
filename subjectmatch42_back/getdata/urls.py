from django.urls import path
#from . import views
from getdata.views import GetDataView

urlpatterns = [
    path('', GetDataView.as_view(), name='getdata'),
    #path('', views.index, name='index'),
]
