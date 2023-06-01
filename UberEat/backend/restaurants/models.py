# restaurants/models.py
from django.db import models


class Restaurants(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField()
    logo = models.ImageField(upload_to='logos/',
                             default='/default_logo.jpg')
    address = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=30)
    rating = models.DecimalField(max_digits=3, decimal_places=2, null=True)

    class Meta:
        db_table = "restaurants"
        managed = True


class Menu(models.Model):
    restaurant = models.ForeignKey(Restaurants, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=7, decimal_places=2)

    class Meta:
        db_table = "menu"
        managed = True
