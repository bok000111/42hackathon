# Generated by Django 4.1.7 on 2023-03-15 11:02

import datetime
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('pm42', '0007_user42_total_feedback'),
    ]

    operations = [
        migrations.CreateModel(
            name='OpenSlot',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('intra_id', models.IntegerField()),
                ('subject_name', models.CharField(default=None, max_length=256, null=True)),
                ('max_num', models.IntegerField(default=4)),
                ('left', models.IntegerField(default=4)),
                ('start_time', models.DateTimeField(default=django.utils.timezone.now)),
                ('duration', models.DurationField(default=datetime.timedelta(0))),
                ('description', models.CharField(default=None, max_length=256, null=True)),
            ],
        ),
    ]
