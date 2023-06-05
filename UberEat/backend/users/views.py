# users/views.py
import base64

from rest_framework import generics, permissions
from rest_framework.response import Response
from django.utils.crypto import get_random_string
from django.views.decorators.csrf import csrf_exempt

from .serializers import UserSerializer, LoginSerializer
from .models import User

COOKIE_EXPIRE_TIME = 3600


class UserView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny  # Or just anon users, because anyone can register
    ]
    serializer_class = UserSerializer


class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    @csrf_exempt
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data

        response = Response({"token": get_random_string(length=20)})

        user_data = dict(UserSerializer(
            user, context=self.get_serializer_context()).data)
        del user_data['id']
        del user_data['password']

        for (key, value) in user_data.items():
            safe_value = str(value)
            encoded_value = base64.b64encode(
                safe_value.encode('utf-8')).decode('utf-8')

            response.set_cookie(key=key, value=encoded_value,
                                max_age=COOKIE_EXPIRE_TIME)

        return response
