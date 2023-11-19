from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255, default='')
    last_name = models.CharField(max_length=255, default='')
    phone = models.CharField(max_length=20, default='')
    email = models.CharField(max_length=255, default='')
    is_public = models.BooleanField(default=True)
    username = models.CharField(max_length=255, default='')

    def __str__(self):
        return self.first_name