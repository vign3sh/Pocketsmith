from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework import permissions
from django.contrib import auth
from rest_framework.response import Response
from authentication.models import UserProfile
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator
from userprofile.seralizers import FriendSerializer
from django.contrib.auth.models import AnonymousUser
from django.contrib.auth.models import User
from django.db.models import Q
import time
# Create your views here.

class GetAllPublicUsers(APIView):
    def get(self, request, format=None):
        try:
            user = self.request.user
            if isinstance(user, AnonymousUser):
                return Response({ 'error': 'User is not logged in' })
            user_profiles = UserProfile.objects.filter(is_public=True)
            #user_profiles = UserProfile.objects.all()
            # get multiple users from UserProfile
            
            users_details = FriendSerializer(user_profiles, many=True)
            
            return Response({ 'profiles': users_details.data})
        except:
            return Response({ 'error': 'Something went wrong when retrieving profiles' })

class BulkDeleteTestUsers(APIView):
    permission_classes = [permissions.IsAdminUser]
    def delete(self, request, format=None):
        
        #users=User.objects.filter(id__in=data.user_ids)
        users=User.objects.filter(is_staff=False) & User.objects.filter(username__istartswith="test")
        
        for user in users:
            try:
                user.delete()
                
            except:
                return Response({ 'error': 'Something went wrong when trying to delete user' })
        return Response({ 'success': 'User deleted successfully' })

class AddUsers(APIView):
    permission_classes = [permissions.AllowAny]
    def get (self, request):
        try:
            
            user = self.request.user
            data = self.request.GET
            
            searchTerm = data.get('search', '')
            if searchTerm == '':
                time.sleep(0.5)
                return Response({ 'error': 'Search term is required' })
            user_profiles = UserProfile.objects.filter( Q(first_name__icontains=searchTerm) 
            | Q(last_name__icontains=searchTerm)
            | Q(username__icontains=searchTerm)
            | Q(email__icontains=searchTerm)
            | Q(phone__icontains=searchTerm)
            , is_public=True,) | UserProfile.objects.filter( Q(username=searchTerm)
            | Q(email=searchTerm)
            | Q(phone=searchTerm))
            #user_profiles = UserProfile.objects.filter(is_public=True)

            #user_profiles = UserProfile.objects.all()
            # get multiple users from UserProfile
            
            users_details = FriendSerializer(user_profiles, many=True)
            
            return Response({ 'profiles': users_details.data[:4]})
        except:
            return Response({ 'error': 'Something went wrong when retrieving profiles' })

class GetFriends(APIView):
    permission_classes = [permissions.AllowAny]
    def get (self, request):
        try:
            
            """user = self.request.user
            user_profile=UserProfile.objects.get(user=user)
            friends=user_profile.friends.all()
            friends=FriendSerializer(friends, many=True) 
            return Response({ 'friends': friends.data})"""
            friends = [
                {
                    "id": 8,
                    "first_name": "test_user1",
                    "last_name": "test_user1",
                    "amount": 8.51,
                    "pfp": 8
                },
                {
                    "id": 9,
                    "first_name": "test_user2",
                    "last_name": "test_user2",
                    "amount": -56.51,
                    "pfp": 9
                },
                {
                    "id": 10,
                    "first_name": "test_user3",
                    "last_name": "test_user3",
                    "amount": 200.25
                },
                {
                    "id": 11,
                    "first_name": "test_user4",
                    "last_name": "test_user4",
                    "amount": -6.51
                }
            ]
            return Response({ 'friends': friends})
        except:
            return Response({ 'error': 'Something went wrong when retrieving friends' })