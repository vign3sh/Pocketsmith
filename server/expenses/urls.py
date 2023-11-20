from django.urls import path, include
from .views import AddExpense, GetAllExpenses, GetExpenseById, GetExpenseByUserId

urlpatterns=[
path('addExpense',AddExpense.as_view()),
path('getAllExpenses',GetAllExpenses.as_view()),
path('getExpenseById', GetExpenseById.as_view()),
path('getExpenseByUserId', GetExpenseByUserId.as_view()),
]