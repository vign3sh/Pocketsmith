from django.urls import path, include
from .views import GetAllPublicUsers, BulkDeleteUsers
urlpatterns = [
    
    path('getAllPublicUsers',GetAllPublicUsers.as_view()),
    path('bulkDeleteUsers', BulkDeleteUsers.as_view()),
    
]
