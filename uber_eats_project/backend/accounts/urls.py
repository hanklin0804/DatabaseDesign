from django.urls import path
from .views import UserRegistrationView, UserLoginView

urlpatterns = [
    # 註冊路由，對應到 UserRegistrationView
    path('register/', UserRegistrationView.as_view(), name='register'),
    # 登入路由，對應到 UserLoginView
    path('login/', UserLoginView.as_view(), name='login'),
]
