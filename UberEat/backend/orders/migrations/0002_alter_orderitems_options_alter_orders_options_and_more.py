# Generated by Django 4.1.3 on 2023-06-01 06:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='orderitems',
            options={'managed': True},
        ),
        migrations.AlterModelOptions(
            name='orders',
            options={'managed': True},
        ),
        migrations.AlterModelTable(
            name='orderitems',
            table='order_item',
        ),
        migrations.AlterModelTable(
            name='orders',
            table='orders',
        ),
    ]
