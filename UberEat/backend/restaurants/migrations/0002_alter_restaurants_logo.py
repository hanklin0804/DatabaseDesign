# Generated by Django 4.1.3 on 2023-05-26 12:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurants',
            name='logo',
            field=models.ImageField(upload_to='ubereats/logos/'),
        ),
    ]
