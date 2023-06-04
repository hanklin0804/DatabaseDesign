# restaurants/serializers.py
from rest_framework import serializers

from .models import Restaurant, Menu

from users.serializers import UserSerializer
from users.models import User


class RestaurantSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Restaurant
        fields = '__all__'


class RestaurantCreateSerializer(serializers.ModelSerializer):
    user_uuid = serializers.UUIDField(write_only=True)

    class Meta:
        model = Restaurant
        fields = ["name", "user_uuid",
                  "description", "address", "phone_number"]

    def create(self, validated_data):
        user_uuid = validated_data.pop('user_uuid')
        user = User.objects.get(uuid=user_uuid)
        return Restaurant.objects.create(user=user, **validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get(
            'description', instance.description)
        instance.address = validated_data.get('address', instance.address)
        instance.phone_number = validated_data.get(
            'phone_number', instance.phone_number)
        instance.save()
        return instance


class MenuSerializer(serializers.ModelSerializer):
    restaurant = RestaurantSerializer()

    class Meta:
        model = Menu
        fields = '__all__'


class MenuCreateSerializer(serializers.ModelSerializer):
    restaurant_uuid = serializers.UUIDField(write_only=True)

    class Meta:
        model = Menu
        fields = ["name", "restaurant_uuid", "description", "price"]

    def create(self, validated_data):
        restaurant_uuid = validated_data.pop('restaurant_uuid')
        restaurant = Restaurant.objects.get(uuid=restaurant_uuid)
        return Menu.objects.create(restaurant=restaurant, **validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get(
            'description', instance.description)
        instance.price = validated_data.get('price', instance.price)
        instance.save()
        return instance
