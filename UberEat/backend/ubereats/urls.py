# ubereats/urls.py
from django.contrib import admin
from django.urls import path, include  # Don't forget to import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('users.urls')),  
    path('api/', include('restaurants.urls')),
    path('api/', include('orders.urls'))
]
