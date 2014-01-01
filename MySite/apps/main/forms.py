from django.forms import ModelForm
from MySite.models import Enquiry


class EnquiryForm(ModelForm):
    class Meta:
        model = Enquiry
        fields = ['name', 'company', 'email', 'enquiry']