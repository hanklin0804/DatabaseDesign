# restaurants/views.py
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Restaurants, MenuItems
from .serializers import RestaurantsSerializer, MenuItemsSerializer

class RestaurantsViewSet(viewsets.ModelViewSet):
    queryset = Restaurants.objects.all()
    serializer_class = RestaurantsSerializer
    @action(detail=True, methods=['post'], url_path='menu-items')
    def create_menu_item(self, request, pk=None):
        serializer = MenuItemsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(restaurant_id=pk)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MenuItemsViewSet(viewsets.ModelViewSet):
    queryset = MenuItems.objects.all()
    serializer_class = MenuItemsSerializer
