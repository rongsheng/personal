from django.conf.urls import patterns, include, url
from MySite.apps.main.views import MainView

urlpatterns = patterns('',
    url(r'^$', MainView.as_view()),
)
