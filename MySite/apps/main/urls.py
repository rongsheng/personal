from django.conf.urls import patterns, url
from MySite.apps.main.views import MainView, SubmitView, NewYearView

urlpatterns = patterns('',
    url(r'^api/contact/$', SubmitView.as_view()),
    url(r'^snow/$', NewYearView.as_view()),
    url(r'', MainView.as_view())
)
