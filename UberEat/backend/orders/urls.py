# orders/urls.py
from django.urls import path, include

from .views import OrderListView, OrderCreateView, OrderDetailedView
from .views import OrderItemListView, OrderItemCreateView, OrderItemDetailedView


urlpatterns = [
    path('orders/', OrderListView.as_view()),
    path('order/', OrderCreateView.as_view()),
    path('order/<str:uuid>/', OrderDetailedView.as_view()),


    path('order_items/', OrderItemListView.as_view()),
    path('order_item/', OrderItemCreateView.as_view()),
    path('order_item/<str:uuid>', OrderItemDetailedView.as_view()),
]
