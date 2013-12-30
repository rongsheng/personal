from MySite.apps.shared.base_view import BaseView
from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect

class MainView(BaseView):
    template_name = 'Main/index.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name, {})
