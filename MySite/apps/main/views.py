import json

from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import HttpResponse

from MySite.apps.shared.base_view import BaseView
from MySite.apps.main.forms import EnquiryForm


class MainView(BaseView):
    template_name = 'Main/index.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name, self.vars)


class SubmitView(TemplateView):
    def post(self, request):
        try:
            form = EnquiryForm(request.POST)
            if form.is_valid():
                form.save()
                response_data = {'status': 'success'}
                return HttpResponse(json.dumps(response_data), content_type="application/json")
            else:
                response_data = {
                    'status': 'failed',
                    'errors': form.errors,
                }
                return HttpResponse(json.dumps(response_data), content_type="application/json")
        except Exception as ex:
            response_data = {
                'status': 'failed',
                'error': str(ex)
            }
            return HttpResponse(json.dumps(response_data), content_type="application/json")