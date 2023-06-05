# users/serializers.py
from rest_framework import serializers

from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class LoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        try:
            user = User.objects.get(email=data['email'])
            if user.password != data['password']:
                raise serializers.ValidationError("Incorrect Credentials")
            return user
        except User.DoesNotExist:
            raise serializers.ValidationError("Account Doesn't Exist")
