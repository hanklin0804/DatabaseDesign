# restaurants/serializers.py
from rest_framework import serializers
from .models import Restaurants, MenuItems

class RestaurantsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurants
        fields = ['id', 'name', 'description', 'logo', 'address', 'phone_number', 'rating']

class MenuItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItems
        fields = ['id', 'restaurant', 'name', 'description', 'price']
