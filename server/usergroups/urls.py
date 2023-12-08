from django.urls import path, include
from .views import GetGroups
urlpatterns = [
    path('', GetGroups.as_view()),
    path('getGroups', GetGroups.as_view()),
]