# review/urls.py
from django.urls import path

from .views import ReviewListView, ReviewCreateView, ReviewDetailedView

urlpatterns = [
    path('reviews/', ReviewListView.as_view()),
    path('review/', ReviewCreateView.as_view()),
    path('review/<str:uuid>/', ReviewDetailedView.as_view())
]
