# Generated by Django 4.1.3 on 2023-06-04 21:06

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('restaurants', '0001_initial'),
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uuid', models.CharField(blank=True, default=uuid.uuid4, max_length=255)),
                ('order_time', models.DateTimeField(auto_now_add=True)),
                ('delivery_time', models.DateTimeField()),
                ('delivery_address', models.CharField(max_length=255)),
                ('total_price', models.DecimalField(decimal_places=2, max_digits=7)),
                ('restaurant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='restaurants.restaurant')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.user')),
            ],
            options={
                'db_table': 'order',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uuid', models.CharField(blank=True, default=uuid.uuid4, max_length=255)),
                ('quantity', models.PositiveSmallIntegerField()),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='restaurants.menu')),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='orders.order')),
            ],
            options={
                'db_table': 'order_item',
                'managed': True,
            },
        ),
    ]
