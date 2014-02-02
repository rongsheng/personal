__author__ = 'sheldon'

from django.views.generic import TemplateView
from django.conf import settings


class BaseView(TemplateView):
    template_name = 'base.html'
    vars = {
        'STAGING': getattr(settings, "STAGING", "")
    }