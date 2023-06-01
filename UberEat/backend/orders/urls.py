# orders/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import OrdersViewSet, OrderItemsViewSet

router = DefaultRouter()
router.register('orders', OrdersViewSet)
router.register('orderitems', OrderItemsViewSet)

urlpatterns = [
    path('orders/', include(router.urls)),
]
