# Generated by Django 4.1.7 on 2023-03-16 08:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pm42', '0041_openslot_finished'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='openslot',
            name='bonus',
        ),
    ]
