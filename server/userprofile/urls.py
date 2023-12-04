from django.urls import path, include
from .views import GetAllPublicUsers, BulkDeleteTestUsers, GetUsers
urlpatterns = [
    
    path('getAllPublicUsers',GetAllPublicUsers.as_view()),
    path('bulkDeleteTestUsers', BulkDeleteTestUsers.as_view()),
    path('getUsers', GetUsers.as_view()),
    
]
