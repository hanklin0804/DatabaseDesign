# orders/serializers.py
from rest_framework import serializers
from .models import Orders, OrderItems

class OrdersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = ['user', 'restaurant', 'order_time', 'delivery_time', 'delivery_address', 'total_price']

class OrderItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItems
        fields = ['order', 'item', 'quantity']
