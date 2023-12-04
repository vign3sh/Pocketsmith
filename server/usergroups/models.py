from django.db import models
from authentication.models import UserProfile

class Group(models.Model):
    grp_name = models.CharField(max_length=255, default='')
    description = models.CharField(max_length=255, default='')
    created_by = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    users = models.ManyToManyField(UserProfile , related_name='groups')

    def __str__(self):
        return self.grp_name
