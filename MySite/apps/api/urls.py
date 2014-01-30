__author__ = 'sheldon'
from rest_framework.routers import DefaultRouter
from MySite.apps.api import views
from django.conf.urls import patterns, url, include


# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'chatuser', views.ChatUserViewSet)

urlpatterns = patterns('',
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
)