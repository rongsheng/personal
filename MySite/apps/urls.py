from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    url(r'', include('MySite.apps.api.urls')),
    url(r'', include('MySite.apps.main.urls')),
)