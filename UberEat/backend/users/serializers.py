# users/serializers.py
from django.contrib.auth import authenticate
from rest_framework import serializers

from .models import Users


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('id', 'first_name', 'last_name', 'email', 'password', 'phone_number', 'delivery_address',)
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = Users.objects.create(**validated_data)
        return user


# class LoginSerializer(serializers.Serializer):
#     email = serializers.CharField()
#     password = serializers.CharField()

#     def validate(self, data):
#         user = authenticate(**data)
#         if user and user.is_active:
#             return user
#         raise serializers.ValidationError("Incorrect Credentials")

class LoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        try:
            user = Users.objects.get(email=data['email'])
            if user.password != data['password']:
                raise serializers.ValidationError("Incorrect Credentials")
            return user
        except Users.DoesNotExist:
            raise serializers.ValidationError("Account Doesn't Exist")
