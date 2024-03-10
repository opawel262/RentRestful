"""
MAIN RENTRESTFUL URL Configuration
"""
from django.contrib import admin
from django.urls import path
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView
from rentrestful.views import TestApiVIew

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/schema/', SpectacularAPIView.as_view(), name='api-schema'),
    path('api/swagger/docs/', SpectacularSwaggerView.as_view(url_name='api-schema'), name='api-docs'),
]
