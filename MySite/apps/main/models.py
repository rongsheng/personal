from django.contrib.auth.models import User
from django.db import models


class Enquiry(models.Model):
    name = models.CharField(max_length=64)
    company = models.CharField(max_length=128, blank=True, null=True)
    email = models.EmailField(max_length=254)
    enquiry = models.TextField()
    time = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.name

    class Meta:
        app_label = "MySite"
        verbose_name_plural = "Enquiries"


class ChatUser(models.Model):
    user = models.OneToOneField(User)
    company = models.CharField(max_length=255)

    def __unicode__(self):
        return self.first_name + ' ' + self.last_name

    class Meta:
        app_label = "MySite"
