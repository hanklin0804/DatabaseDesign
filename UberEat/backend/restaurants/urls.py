# restaurants/urls.py
from django.urls import path, include

from .views import RestaurantsListView, RestaurantsCreateView, RestaurantsDetailedView
from .views import MenuListView, MenuCreateView, MenuDetailedView

urlpatterns = [
    path('restaurants/', RestaurantsListView.as_view()),
    path('restaurant/', RestaurantsCreateView.as_view()),
    path('restaurant/<str:name>/', RestaurantsDetailedView.as_view()),



    path('menus/', MenuListView.as_view()),
    path('menu/', MenuCreateView.as_view()),
    path('menu/<str:name>', MenuDetailedView.as_view()),
]
