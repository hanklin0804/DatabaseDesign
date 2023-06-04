# users/views.py
import base64

from rest_framework import generics, permissions
from rest_framework.response import Response
from django.utils.crypto import get_random_string
from django.views.decorators.csrf import csrf_exempt

from .serializers import UserSerializer, LoginSerializer
from .models import User

COOKIE_EXPIRE_TIME = 3600


class UserView(generics.CreateAPIView):
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

        response = Response({
            # You would use Django Rest Framework's token generator here
            "token": get_random_string(length=20)
        })

        user_data = dict(UserSerializer(
            user, context=self.get_serializer_context()).data)
        del user_data['id']

        for (key, value) in user_data.items():
            safe_value = base64.b64encode(
                value.encode('utf-8')).decode('ascii')
            response.set_cookie(key=key, value=safe_value,
                                max_age=COOKIE_EXPIRE_TIME)

        return response
