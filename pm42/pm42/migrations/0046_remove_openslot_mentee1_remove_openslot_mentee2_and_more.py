# Generated by Django 4.1.7 on 2023-03-17 07:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pm42', '0045_user42_description'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='openslot',
            name='mentee1',
        ),
        migrations.RemoveField(
            model_name='openslot',
            name='mentee2',
        ),
        migrations.RemoveField(
            model_name='openslot',
            name='mentee3',
        ),
        migrations.RemoveField(
            model_name='openslot',
            name='mentee4',
        ),
        migrations.AddField(
            model_name='openslot',
            name='mentees',
            field=models.CharField(default='', max_length=256),
        ),
    ]
