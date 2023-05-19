# users/views.py
from rest_framework import generics, permissions
from rest_framework.response import Response
from .serializers import UserSerializer, LoginSerializer
from .models import Users


class UserView(generics.CreateAPIView):
    queryset = Users.objects.all()
    permission_classes = [
        permissions.AllowAny  # Or just anon users, because anyone can register
    ]
    serializer_class = UserSerializer


class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": "Your token goes here"  # You would use Django Rest Framework's token generator here
        })
