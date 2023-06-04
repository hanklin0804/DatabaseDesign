from django.urls import path
from .views import UserOrderView

urlpatterns = [
    path('users/<int:user_uuid>/orders/<int:order_uuid>',
         UserOrderView.as_view(), name='user_order'),
]
