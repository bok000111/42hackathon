# Generated by Django 4.1.7 on 2023-03-16 06:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pm42', '0035_alter_user42_token'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user42',
            name='token',
            field=models.BinaryField(default=b''),
        ),
    ]
