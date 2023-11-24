from django.urls import path, include
from .views import GetAllPublicUsers, BulkDeleteTestUsers
urlpatterns = [
    
    path('getAllPublicUsers',GetAllPublicUsers.as_view()),
    path('bulkDeleteTestUsers', BulkDeleteTestUsers.as_view()),
    
]
