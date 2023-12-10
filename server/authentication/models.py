from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='userprofile')
    first_name = models.CharField(max_length=255, default='')
    last_name = models.CharField(max_length=255, default='',blank=True)
    phone = models.CharField(max_length=20, default='',blank=True)
    email = models.CharField(max_length=255, default='',blank=True)
    is_public = models.BooleanField(default=True)
    username = models.CharField(max_length=255, default='')
    friends = models.ManyToManyField('self', blank=True)
    pfp = models.CharField(max_length=10, default='', blank=True)

    def __str__(self):
        return self.first_name