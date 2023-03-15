from django.conf import settings
from django.db import models
from django.utils import timezone
from datetime import timedelta

class	User42(models.Model):
    login = models.CharField(max_length=20, unique=True)
    image = models.CharField(max_length=256, null=True, default=None)
    #coa = models.TextChoices('GUN', 'GON', 'GAM', 'LEE')
    level = models.FloatField(default=0.0)
    mentor_cnt = models.IntegerField(default=0)
    feedback1 = models.IntegerField(default=0)
    feedback2 = models.IntegerField(default=0)
    feedback3 = models.IntegerField(default=0)
    feedback4 = models.IntegerField(default=0)
    feedback5 = models.IntegerField(default=0)
    total_time = models.DurationField(default=timedelta(days =0, seconds = 0))
    token = models.BinaryField(default=b'')

