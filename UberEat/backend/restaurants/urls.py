# restaurants/urls.py
from django.urls import path, include

from .views import RestaurantListView, RestaurantCreateView, RestaurantDetailedView
from .views import MenuListView, MenuCreateView, MenuDetailedView

urlpatterns = [
    path('restaurants/', RestaurantListView.as_view()),
    path('restaurant/', RestaurantCreateView.as_view()),
    path('restaurant/<str:uuid>/', RestaurantDetailedView.as_view()),

    path('menus/', MenuListView.as_view()),
    path('menu/', MenuCreateView.as_view()),
    path('menu/<str:uuid>/', MenuDetailedView.as_view()),
]
