# Generated by Django 4.1.7 on 2023-03-15 10:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pm42', '0006_alter_user42_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='user42',
            name='total_feedback',
            field=models.IntegerField(default=0),
        ),
    ]
