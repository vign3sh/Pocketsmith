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
                            "description": "test group 1",
                            "amount": -100,
                            "pfp": 5
                        },
                        {
                            "id": 2,
                            "grp_name": "Test Group 2",
                            "description": "test group 2",
                            "amount": 19.5,
                        },
                        {
                            "id": 3,
                            "grp_name": "Test Group 3",
                            "description": "test group 3",
                            "amount": -65.35,
                        },
                        {
                            "id": 4,
                            "grp_name": "Test Group 4",
                            "description": "test group 4",
                            "amount": 0,
                        },
                        {
                            "id": 5,
                            "grp_name": "Test Group 5",
                            "description": "test group 5",
                            "amount": 150,
                        }
                    ]
            return Response({ 'groups': groups})
        except:
            return Response({ 'error': 'Something went wrong when retrieving groups' })