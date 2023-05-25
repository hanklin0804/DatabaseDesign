# orders/views.py
from rest_framework import viewsets
from .models import Orders, OrderItems
from .serializers import OrdersSerializer, OrderItemsSerializer

class OrdersViewSet(viewsets.ModelViewSet):
    queryset = Orders.objects.all()
    serializer_class = OrdersSerializer
    filterset_fields = ['user']  

class OrderItemsViewSet(viewsets.ModelViewSet):
    queryset = OrderItems.objects.all()
    serializer_class = OrderItemsSerializer
    filterset_fields = ['order']  