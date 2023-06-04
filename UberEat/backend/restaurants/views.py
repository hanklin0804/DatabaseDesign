# restaurants/views.py
from rest_framework import generics

from .models import Restaurant, Menu
from .serializers import RestaurantSerializer, RestaurantCreateSerializer
from .serializers import MenuSerializer, MenuCreateSerializer


class RestaurantListView(generics.ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer


class RestaurantCreateView(generics.CreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantCreateSerializer


class RestaurantDetailedView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantCreateSerializer
    lookup_field = 'uuid'

# Menu Item


class MenuListView(generics.ListAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer


class MenuCreateView(generics.CreateAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuCreateSerializer


class MenuDetailedView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuCreateSerializer
    lookup_field = 'uuid'
