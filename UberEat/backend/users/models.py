# users/models.py
from django.db import models

class Users(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)  # This should be hashed, not stored as plain text
    phone_number = models.CharField(max_length=15)
    delivery_address = models.CharField(max_length=255)


