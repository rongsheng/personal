from MySite.apps.shared.base_view import BaseView
from Mysite.apps.main.models import Enquiry
from django.shortcuts import render, get_object_or_404
from django.views.generic import TemplateView
from django.http import HttpResponse
import json


class MainView(BaseView):
    template_name = 'Main/index.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name, {})


class SubmitView(TemplateView):
    def post(self, request):
        try:
            enquiry = Enquiry(request.POST)
            enquiry.save()
            return HttpResponse()
        except:
            response_data = {'status': 'failed', 'message': 'Failed to send your enquiry, please try again.'}
            return HttpResponse(json.dumps(response_data), content_type="application/json")