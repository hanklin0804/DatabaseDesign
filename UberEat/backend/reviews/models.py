# reviews/models.py
from uuid import uuid4
from django.db import models
from users.models import User
from restaurants.models import Restaurant


class Review(models.Model):
    uuid = models.CharField(max_length=255, blank=True, default=uuid4)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    rating = models.PositiveSmallIntegerField()
    review = models.TextField()

    class Meta:
        db_table = "review"
        managed = True
