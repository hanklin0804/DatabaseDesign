# restaurants/serializers.py
from rest_framework import serializers
from .models import Restaurants, Menu


class RestaurantsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurants
        fields = '__all__'


class MenuSerializer(serializers.ModelSerializer):
    restaurant = RestaurantsSerializer()

    class Meta:
        model = Menu
        fields = '__all__'
