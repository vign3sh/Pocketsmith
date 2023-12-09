from django.shortcuts import render
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from authentication.models import UserProfile
from usergroups.serializer import AllGroupSerializer
# Create your views here.

class GetGroups(APIView):
    #permission_classes = [permissions.AllowAny]
    def get (self, request):
        try:
            """
            user = self.request.user
            user_profile=UserProfile.objects.get(user=user)
            groups=user_profile.groups.all()
            groups=AllGroupSerializer(groups, many=True) 
            return Response({ 'groups': groups.data})
            """
            groups= [
                        {
                            "id": 1,
                            "grp_name": "Test Group 1",
                            "description": "test group",
                            "amount": -100,
                            "pfp": 5
                        }
                    ]
            return Response({ 'groups': groups})
        except:
            return Response({ 'error': 'Something went wrong when retrieving groups' })