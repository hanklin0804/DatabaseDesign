from rest_framework import generics

from orders.models import Order
from orders.serializers import OrderSerializer


class UserOrderView(generics.RetrieveAPIView):
    serializer_class = OrderSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_uuid']
        order_id = self.kwargs['order_uuid']
        return Order.objects.filter(user=user_id, id=order_id)
