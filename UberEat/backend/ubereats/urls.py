# ubereats/urls.py
from django.contrib import admin
from django.urls import path, include  # Don't forget to import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('users.urls')),  
    path('', include('restaurants.urls'))
]
