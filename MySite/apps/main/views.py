from MySite.apps.shared.base_view import BaseView
from django.shortcuts import render


class MainView(BaseView):
    template_name = 'Main/index.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name, {})
