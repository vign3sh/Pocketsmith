from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework import permissions
from django.contrib import auth
from rest_framework.response import Response
from authentication.models import UserProfile
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator
from authentication.seralizers import UserProfileSerializer
from django.contrib.auth.models import AnonymousUser
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
            
            users_details = UserProfileSerializer(user_profiles, many=True)
            
            return Response({ 'profiles': users_details.data})
        except:
            return Response({ 'error': 'Something went wrong when retrieving profiles' })

class BulkDeleteUsers(APIView):
    def delete(self, request, format=None):
        data = self.request.data
        import pdb;pdb.set_trace()
        users=User.objects.filter(id__in=data.user_ids)
        for user in users:
            try:
                User.objects.filter(id=user.id).delete()
                return Response({ 'success': 'User deleted successfully' })
            except:
                return Response({ 'error': 'Something went wrong when trying to delete user' })
