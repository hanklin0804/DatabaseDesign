from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate
from .serializers import UserRegistrationSerializer, UserLoginSerializer

class UserRegistrationView(APIView):
    def post(self, request):
        # 將請求數據傳遞給序列化器
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            # 如果數據有效，創建新用戶
            user = serializer.save()
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        # 如果數據無效，返回錯誤信息
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLoginView(APIView):
    def post(self, request):
        # 將請求數據傳遞給序列化器
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            # 如果數據有效，嘗試驗證用戶
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = authenticate(request, email=email, password=password)
            if user is not None:
                # 如果驗證成功，返回成功信息
                return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
            else:
                # 如果驗證失敗，返回錯誤信息
                return Response({'message': 'Invalid email or password'}, status=status.HTTP_400_BAD_REQUEST)
        # 如果數據無效，返回錯誤信息
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
