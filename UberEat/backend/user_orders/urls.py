from django.urls import path
from .views import UserOrderView

urlpatterns = [
    path('users/<int:user_id>/orders/<int:order_id>',
         UserOrderView.as_view(), name='user_order'),
]
