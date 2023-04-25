# from django.db import models
# from django.contrib.auth.models import AbstractUser

# class User(AbstractUser):
#     phone_number = models.CharField(max_length=20)
#     delivery_address = models.CharField(max_length=255)


# from django.db import models

# class User(models.Model):
#     first_name = models.CharField(max_length=255)
#     last_name = models.CharField(max_length=255)
#     email = models.EmailField(unique=True)
#     password = models.CharField(max_length=255)
#     phone_number = models.CharField(max_length=20)
#     delivery_address = models.CharField(max_length=255)

#     class Meta:
#         db_table = 'Users'  # This ensures that the Django model maps to the existing 'Users' table in MySQL

#     def __str__(self):
#         return f"{self.first_name} {self.last_name}"
