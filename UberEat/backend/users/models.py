# users/models.py
from django.db import models
from uuid import uuid4


class User(models.Model):
    uuid = models.CharField(max_length=255, blank=True, default=uuid4)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=30)
    delivery_address = models.CharField(max_length=255)

    class Meta:
        db_table = "user"
        managed = True
