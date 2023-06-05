# orders/views.py
from rest_framework import generics

from .models import Order, OrderItem
from .serializers import OrderSerializer, OrderCreateSerializer
from .serializers import OrderItemSerializer, OrderItemCreateSerializer


class OrderListView(generics.ListAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderCreateView(generics.CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderCreateSerializer


class OrderDetailedView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderCreateSerializer
    lookup_field = 'uuid'


# ----------------------------------------------------

class OrderItemListView(generics.ListAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer


class OrderItemCreateView(generics.CreateAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemCreateSerializer


class OrderItemDetailedView(generics.RetrieveUpdateDestroyAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer
    lookup_field = 'uuid'
