# orders/models.py
from django.db import models
from users.models import Users
from restaurants.models import Restaurants, MenuItems

class Orders(models.Model):
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    restaurant = models.ForeignKey(Restaurants, on_delete=models.CASCADE)
    order_time = models.DateTimeField(auto_now_add=True)
    delivery_time = models.DateTimeField()
    delivery_address = models.CharField(max_length=255)
    total_price = models.DecimalField(max_digits=7, decimal_places=2)

class OrderItems(models.Model):
    order = models.ForeignKey(Orders, on_delete=models.CASCADE)
    item = models.ForeignKey(MenuItems, on_delete=models.CASCADE)
    quantity = models.PositiveSmallIntegerField()
