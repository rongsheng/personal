from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    url(r'^/$', include('MySite.apps.main.views')),
)
