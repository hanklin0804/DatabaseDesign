# orders/serializers.py
from rest_framework import serializers

from .models import Order, OrderItem
from users.serializers import UserSerializer
from restaurants.serializers import MenuSerializer, RestaurantSerializer


class OrderSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    restaurant = RestaurantSerializer()

    class Meta:
        model = Order
        fields = '__all__'


class OrderItemSerializer(serializers.ModelSerializer):
    order = OrderSerializer()
    item = MenuSerializer()

    class Meta:
        model = OrderItem
        fields = '__all__'
