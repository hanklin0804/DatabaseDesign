# orders/models.py
from django.db import models
from users.models import Users
from restaurants.models import Restaurants, Menu


class Orders(models.Model):
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    restaurant = models.ForeignKey(Restaurants, on_delete=models.CASCADE)
    order_time = models.DateTimeField(auto_now_add=True)
    delivery_time = models.DateTimeField()
    delivery_address = models.CharField(max_length=255)
    total_price = models.DecimalField(max_digits=7, decimal_places=2)

    class Meta:
        db_table = "orders"
        managed = True


class OrderItems(models.Model):
    order = models.ForeignKey(Orders, on_delete=models.CASCADE)
    item = models.ForeignKey(Menu, on_delete=models.CASCADE)
    quantity = models.PositiveSmallIntegerField()

    class Meta:
        db_table = "order_item"
        managed = True
