
from rest_framework import serializers
from usergroups.models import Group


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = "__all__"

class AllGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['id','grp_name','description']


