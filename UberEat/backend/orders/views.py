# orders/views.py
from rest_framework import generics

from .models import Order, OrderItem
from .serializers import OrderSerializer, OrderCreateSerializer, OrderItemSerializer


class OrderListView(generics.ListAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderCreateView(generics.CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderCreateSerializer


class OrderDetailedView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    lookup_field = 'uuid'


# ----------------------------------------------------

class OrderItemListView(generics.ListAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer


class OrderItemCreateView(generics.CreateAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer


class OrderItemDetailedView(generics.RetrieveUpdateDestroyAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer
    lookup_field = 'uuid'
