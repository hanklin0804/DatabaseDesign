# ubereats/urls.py
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include  # Don't forget to import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('users.urls')),
    path('api/', include('restaurants.urls')),
    path('api/', include('orders.urls')),
    path('api/', include('reviews.urls')),

    path('api/', include('user_orders.urls')),
]

urlpatterns += static(settings.MEDIA_URL,
                      document_root=settings.MEDIA_ROOT)
