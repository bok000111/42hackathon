# Generated by Django 4.1.7 on 2023-03-16 03:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pm42', '0015_remove_openslot_duration_openslot_end_time_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='openslot',
            name='end_time',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='openslot',
            name='start_time',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='user42',
            name='total_time',
            field=models.IntegerField(default=0),
        ),
    ]
