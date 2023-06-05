# orders/serializers.py
from rest_framework import serializers

from .models import Order, OrderItem
from users.serializers import UserSerializer
from restaurants.serializers import MenuSerializer, RestaurantSerializer

from restaurants.models import Restaurant
from users.models import User


class OrderSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    restaurant = RestaurantSerializer()

    class Meta:
        model = Order
        fields = '__all__'


class OrderCreateSerializer(serializers.ModelSerializer):
    restaurant_uuid = serializers.UUIDField(write_only=True)
    user_uuid = serializers.UUIDField(write_only=True)

    class Meta:
        model = Order
        fields = ["user_uuid", "restaurant_uuid", "order_time",
                  "delivery_time", "delivery_address", "total_price", "status", "payment_method", "finished"]

    def create(self, validated_data):
        restaurant_uuid = validated_data.pop('restaurant_uuid')
        user_uuid = validated_data.pop('user_uuid')
        restaurant = Restaurant.objects.get(uuid=restaurant_uuid)
        user = User.objects.get(uuid=user_uuid)
        return Order.objects.create(user=user, restaurant=restaurant, **validated_data)


# Order Item

class OrderItemSerializer(serializers.ModelSerializer):
    order = OrderSerializer()
    item = MenuSerializer()

    class Meta:
        model = OrderItem
        fields = '__all__'
