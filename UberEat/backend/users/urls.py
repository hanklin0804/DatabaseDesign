# users/urls.py
from django.urls import path
from .views import UserView, LoginView

urlpatterns = [
    path('user/', UserView.as_view()),
    path('user/login/', LoginView.as_view()),
]
