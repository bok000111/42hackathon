# Generated by Django 4.1.7 on 2023-03-16 10:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pm42', '0043_rename_end_time_openslot_end_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='openslot',
            old_name='mento',
            new_name='mentor',
        ),
    ]
