from django.urls import path
from getdata.views import GetDataView

urlpatterns = [
    path('', GetDataView.as_view(), name='getdata'),
]
