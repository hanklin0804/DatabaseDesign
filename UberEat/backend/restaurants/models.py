# restaurants/models.py
from uuid import uuid4
from django.db import models

from users.models import User


class Restaurant(models.Model):
    uuid = models.CharField(max_length=255, blank=True, default=uuid4)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField()
    logo = models.ImageField(upload_to='logos/',
                             default='/default_logo.jpg')
    address = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=30)
    rating = models.DecimalField(
        max_digits=3, decimal_places=2, null=True, blank=True, default=5.0)

    class Meta:
        db_table = "restaurant"
        managed = True


class Menu(models.Model):
    uuid = models.CharField(max_length=255, blank=True, default=uuid4)
    restaurant = models.ForeignKey(
        Restaurant, blank=True, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=7, decimal_places=2)

    class Meta:
        db_table = "menu"
        managed = True
