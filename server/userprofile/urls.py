from django.urls import path, include
from .views import GetAllPublicUsers, BulkDeleteTestUsers, GetUsers, GetFriends
urlpatterns = [
    
    path('getAllPublicUsers',GetAllPublicUsers.as_view()),
    path('bulkDeleteTestUsers', BulkDeleteTestUsers.as_view()),
    path('getUsers', GetUsers.as_view()),
    path('getFriends', GetFriends.as_view()),
    
]
