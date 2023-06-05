# reviews/views.py
from rest_framework import generics

from .models import Review
from .serializers import ReviewSerializer, ReviewCreateSerializer


class ReviewListView(generics.ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer


class ReviewCreateView(generics.CreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewCreateSerializer


class ReviewDetailedView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewCreateSerializer
    lookup_field = 'uuid'
