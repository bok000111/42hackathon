from django.conf import settings
from django.db import models
from django.utils import timezone
from datetime import timedelta

class User42(models.Model):
    id = models.AutoField(primary_key=True)
    login = models.CharField(max_length=16, unique=True)
    image = models.CharField(max_length=256, blank=True, default='')
    coa = models.CharField(max_length=256, blank=True, default='')
    level = models.FloatField(default=0.0)
    mentor_cnt = models.IntegerField(default=0)
    total_feedback = models.IntegerField(default=0)
    feedback1 = models.IntegerField(default=0)
    feedback2 = models.IntegerField(default=0)
    feedback3 = models.IntegerField(default=0)
    feedback4 = models.IntegerField(default=0)
    feedback5 = models.IntegerField(default=0)
    total_time = models.IntegerField(default=0)
    token = models.TextField(default='')
    description = models.CharField(max_length=256, blank=True, default='')

class OpenSlot(models.Model):
    id = models.AutoField(primary_key=True)
    mentor = models.CharField(max_length=16)
    subject = models.CharField(max_length=256)
    max = models.IntegerField(default=1)
    curr = models.IntegerField(default=0)
    left = models.IntegerField(default=1)
    finished = models.IntegerField(default=0)
    mentees = models.CharField(max_length=256, default='')
    start = models.IntegerField(default=0)
    end = models.IntegerField(default=0)
    description = models.CharField(max_length=256, blank=True, default='')