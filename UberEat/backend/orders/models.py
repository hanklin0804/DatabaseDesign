# orders/models.py
from uuid import uuid4
from django.db import models

from users.models import User
from restaurants.models import Restaurant, Menu


class Order(models.Model):
    uuid = models.CharField(max_length=255, blank=True, default=uuid4)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True)
    restaurant = models.ForeignKey(
        Restaurant, on_delete=models.CASCADE, blank=True)
    order_time = models.BigIntegerField(blank=True)
    delivery_time = models.BigIntegerField(blank=True, default=0)
    delivery_address = models.CharField(max_length=255, blank=True)
    total_price = models.FloatField(
        blank=True, default=0)
    status = models.CharField(max_length=255, blank=True, default="Preparing")
    payment_method = models.CharField(max_length=255, blank=True)
    finished = models.BooleanField(blank=True, default=False)

    class Meta:
        db_table = "order"
        managed = True


class OrderItem(models.Model):
    uuid = models.CharField(max_length=255, blank=True, default=uuid4)
    order = models.ForeignKey(Order, on_delete=models.CASCADE, blank=True)
    item = models.ForeignKey(Menu, on_delete=models.CASCADE, blank=True)
    quantity = models.PositiveSmallIntegerField(blank=True)

    class Meta:
        db_table = "order_item"
        managed = True
