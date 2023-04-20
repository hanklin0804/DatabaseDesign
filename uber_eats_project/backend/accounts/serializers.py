from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

# 用戶註冊序列化器
class UserRegistrationSerializer(serializers.ModelSerializer):
    # 將密碼設為僅寫入，以便不將其返回給客戶端
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'password', 'phone_number')

    # 使用驗證後的數據創建新用戶
    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            phone_number=validated_data['phone_number']
        )
        return user

# 用戶登錄序列化器
class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()
