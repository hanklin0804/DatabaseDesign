# restaurants/views.py
from rest_framework import generics

from .models import Restaurants, Menu
from .serializers import RestaurantsSerializer, MenuSerializer


class RestaurantsListView(generics.ListAPIView):
    queryset = Restaurants.objects.all()
    serializer_class = RestaurantsSerializer
    # filterset_fields = ['name', 'rating']  # filter by name and rating


class RestaurantsCreateView(generics.CreateAPIView):
    queryset = Restaurants.objects.all()
    serializer_class = RestaurantsSerializer


class RestaurantsDetailedView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Restaurants.objects.all()
    serializer_class = RestaurantsSerializer
    lookup_field = 'name'

# Menu Item


class MenuListView(generics.ListAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer


class MenuCreateView(generics.CreateAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer


class MenuDetailedView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
    lookup_field = 'name'
