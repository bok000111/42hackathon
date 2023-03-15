from django.conf import settings
from django.db import models
from django.utils import timezone

class	User42(models.Model):
    login = models.CharField(max_length=20)
    profile_img = models.TextField()
    #coa = models.TextChoices('GUN', 'GON', 'GAM', 'LEE')
    level = models.CharField(max_length=10)

