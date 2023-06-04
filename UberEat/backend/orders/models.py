# orders/models.py
from uuid import uuid4
from django.db import models

from users.models import User
from restaurants.models import Restaurant, Menu


class Order(models.Model):
    uuid = models.CharField(max_length=255, blank=True, default=uuid4)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    order_time = models.DateTimeField(auto_now_add=True)
    delivery_time = models.DateTimeField()
    delivery_address = models.CharField(max_length=255)
    total_price = models.DecimalField(max_digits=7, decimal_places=2)

    class Meta:
        db_table = "order"
        managed = True


class OrderItem(models.Model):
    uuid = models.CharField(max_length=255, blank=True, default=uuid4)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    item = models.ForeignKey(Menu, on_delete=models.CASCADE)
    quantity = models.PositiveSmallIntegerField()

    class Meta:
        db_table = "order_item"
        managed = True
