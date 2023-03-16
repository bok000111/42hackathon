# Generated by Django 4.1.7 on 2023-03-16 03:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pm42', '0012_openslot_final_mark'),
    ]

    operations = [
        migrations.AlterField(
            model_name='openslot',
            name='login',
            field=models.CharField(default='', max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='openslot',
            name='subject_name',
            field=models.CharField(default='', max_length=256, null=True),
        ),
        migrations.AlterField(
            model_name='user42',
            name='coa',
            field=models.CharField(blank=True, default='', max_length=256),
        ),
        migrations.AlterField(
            model_name='user42',
            name='image',
            field=models.CharField(blank=True, default='', max_length=256),
        ),
    ]
