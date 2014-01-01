__author__ = 'Sheldon Rong'

from django.contrib import admin
from MySite.apps.main.models import Enquiry


class EnquiryAdmin(admin.ModelAdmin):
    list_display = ('name', 'company', 'email', 'enquiry', 'time')
    list_filter = ('name', 'company', 'email')
    search_fields = ('name', 'company', 'email', 'enquiry')
    readonly_fields = ('name', 'company', 'email', 'enquiry', 'time')

    fieldsets = [
        ('Enquiry', {
            'fields': ('name', 'company', 'email', 'enquiry')
        }),
        ('Updated Time', {
            'fields': {'time', }
        })
    ]

admin.site.register(Enquiry, EnquiryAdmin)
