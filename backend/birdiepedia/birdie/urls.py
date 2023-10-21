from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from birdie import views

app_name = 'birdie'
router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'birdies', views.BirdieViewSet)
router.register(r'birdie-updates', views.BirdieUpdateViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),  # Include your DRF app's URLs
]
