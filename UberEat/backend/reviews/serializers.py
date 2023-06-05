# restaurants/serializers.py
from rest_framework import serializers

from .models import Review

from users.models import User
from users.serializers import UserSerializer
from restaurants.models import Restaurant
from restaurants.serializers import RestaurantSerializer


class ReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    restaurant = RestaurantSerializer()

    class Meta:
        model = Review
        fields = '__all__'


class ReviewCreateSerializer(serializers.ModelSerializer):
    user_uuid = serializers.UUIDField(write_only=True)
    restaurant_uuid = serializers.UUIDField(write_only=True)

    class Meta:

        model = Review
        fields = ["user_uuid", "restaurant_uuid", "rating", "review"]

    def create(self, validated_data):
        user_uuid = validated_data.pop('user_uuid')
        restaurant_uuid = validated_data.pop('restaurant_uuid')
        user = User.objects.get(uuid=user_uuid)
        restaurant = Restaurant.objects.get(uuid=restaurant_uuid)
        return Review.objects.create(user=user, restaurant=restaurant, **validated_data)
