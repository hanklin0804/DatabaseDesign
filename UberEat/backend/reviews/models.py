# reviews/models.py
from django.db import models
from users.models import Users
from restaurants.models import Restaurants

class Reviews(models.Model):
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    restaurant = models.ForeignKey(Restaurants, on_delete=models.CASCADE)
    rating = models.PositiveSmallIntegerField()
    review = models.TextField()
