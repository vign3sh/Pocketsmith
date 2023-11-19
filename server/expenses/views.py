from django.shortcuts import render
from utils import get_db_handle
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import AnonymousUser
from bson import ObjectId
import json
# Create your views here.

class AddExpense(APIView):
    def post(self, request, format=None):
        user = self.request.user
        data = self.request.data
        amount = data['amount']
        paid_id = data['paid_id']
        '''
        description = data.get('description', '')
        
        
        owed_id = data['owed_id']
        description = data['description']
        category = data['category']
        '''


        if isinstance(user, AnonymousUser):
            return Response({ 'error': 'User is not logged in' })
        try:
            userProfile=UserProfile.objects.get(user_id=user.id)
            client,dbhandle=get_db_handle('pocketclusters')
            collection_name = dbhandle["expenses"]

            #let's create two documents
            record_1 = {
                "paid_id": paid_id,
                "amount" : amount,
            }
            # Insert the documents
            collection_name.insert_many([data])
            # Check the count
            #count = collection_name.count()
            #print(count)
            return Response({ 'success': 'Expense added successfully' })
        except:
            return Response({ 'error': 'Something went wrong when trying to add record' })
        

class GetAllExpenses(APIView):
    def get(self, request, format=None):
        user = self.request.user
        if isinstance(user, AnonymousUser):
            return Response({ 'error': 'User is not logged in' })
        try:
            client,dbhandle=get_db_handle('pocketclusters')
            collection_name = dbhandle["expenses"]
            obj_id='6557cccf8191f7fd133e7c67'
           #get all expenses
            expenses = collection_name.find()
            #expenses = collection_name.find_one({'_id': ObjectId(obj_id)})
            # convert this mongo object to a list
            expenses = json.dumps(list(expenses), default=str)
  
            return Response({'data':expenses})
        except:
            return Response({ 'error': 'Something went wrong when trying to add record' })
        
class GetExpenseById(APIView):
    def get(self, request, format=None):
        user = self.request.user
        if isinstance(user, AnonymousUser):
            return Response({ 'error': 'User is not logged in' })
        
        try:
            
            exp_ids=self.request.data['exp_ids']
            obj_ids=[]
            for exp_id in exp_ids:
                obj_ids.append(ObjectId(exp_id))
            # map exp_ids to object ids
            

            client,dbhandle=get_db_handle('pocketclusters')
            collection_name = dbhandle["expenses"]
            
           #get all expenses
            #expenses = collection_name.find()
            
            expenses = collection_name.find({'_id': {'$in': obj_ids}})
            # convert this mongo object to a list
            expenses = json.dumps(list(expenses), default=str)
  
            return Response({'data':expenses})
        except Exception as e:
            return Response({ 'error': e })
        