# Generated by Django 4.1.7 on 2023-03-15 12:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pm42', '0011_rename_max_num_openslot_max_openslot_curr'),
    ]

    operations = [
        migrations.AddField(
            model_name='openslot',
            name='final_mark',
            field=models.IntegerField(default=0),
        ),
    ]
