from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, SummaryViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'summaries', SummaryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
