from django.conf import settings
from django.db import models
from django.utils import timezone
from datetime import timedelta

class User42(models.Model):
    id = models.AutoField(primary_key=True)
    login = models.CharField(max_length=20)
    image = models.CharField(max_length=256, null=True, default=None)
    coa = models.CharField(max_length=256, null=True, default=None)
    level = models.FloatField(default=0.0)
    mentor_cnt = models.IntegerField(default=0)
    total_feedback = models.IntegerField(default=0)
    feedback1 = models.IntegerField(default=0)
    feedback2 = models.IntegerField(default=0)
    feedback3 = models.IntegerField(default=0)
    feedback4 = models.IntegerField(default=0)
    feedback5 = models.IntegerField(default=0)
    total_time = models.DurationField(default=timedelta(days=0, seconds=0))
    token = models.BinaryField(default=b'')

class OpenSlot(models.Model):
    id = models.AutoField(primary_key=True)
    login = models.CharField(max_length=20, null=True, default=None)
    subject_name = models.CharField(max_length=256, null=True, default=None)
    max = models.IntegerField(default=4)
    curr = models.IntegerField(default=0)
    left = models.IntegerField(default=4)
    start_time = models.DateTimeField(default=timezone.now)
    duration = models.DurationField(default=timedelta(days=0, seconds=0))
    description = models.CharField(max_length=256, null=True, default=None)