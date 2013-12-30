from django.db import models


class Enquiry(models.Model):
    name = models.CharField(max_length=64)
    company = models.CharField(max_length=128)
    email = models.EmailField(max_length=254)
    enquiry = models.TextField()

    class Meta:
        app_label = "MySite"