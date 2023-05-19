# restaurants/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RestaurantsViewSet, MenuItemsViewSet

router = DefaultRouter()
router.register('restaurants', RestaurantsViewSet)
router.register('menu-items', MenuItemsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
