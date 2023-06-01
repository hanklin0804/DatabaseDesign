from rest_framework import generics

from orders.models import Orders
from orders.serializers import OrdersSerializer


class UserOrderView(generics.RetrieveAPIView):
    serializer_class = OrdersSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        order_id = self.kwargs['order_id']
        return Orders.objects.filter(user=user_id, id=order_id)
