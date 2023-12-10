from django.urls import path, include
from .views import GetAllPublicUsers, BulkDeleteTestUsers, AddUsers, GetFriends
urlpatterns = [
    
    path('getAllPublicUsers',GetAllPublicUsers.as_view()),
    path('bulkDeleteTestUsers', BulkDeleteTestUsers.as_view()),
    path('addUsers', AddUsers.as_view()),
    path('getFriends', GetFriends.as_view()),
    
]
