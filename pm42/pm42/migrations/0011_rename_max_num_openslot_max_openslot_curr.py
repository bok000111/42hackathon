# Generated by Django 4.1.7 on 2023-03-15 11:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pm42', '0010_user42_coa'),
    ]

    operations = [
        migrations.RenameField(
            model_name='openslot',
            old_name='max_num',
            new_name='max',
        ),
        migrations.AddField(
            model_name='openslot',
            name='curr',
            field=models.IntegerField(default=0),
        ),
    ]