# Generated by Django 4.1.7 on 2023-03-15 10:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pm42', '0004_alter_user42_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user42',
            name='id',
            field=models.AutoField(default=0, primary_key=True, serialize=False),
        ),
    ]
