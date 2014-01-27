from django.conf.urls import patterns, include, url
from django.contrib.auth.views import login, logout
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
admin.autodiscover()

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^login/$', login, {'template_name': 'login.html'}),
    url(r'^logout/$', logout, {'next_page': '/'}),
    url(r'', include('MySite.urls')),
) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
