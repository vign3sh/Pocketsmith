from django.shortcuts import render
from utils import get_db_handle
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import AnonymousUser
from bson import ObjectId
import json
from rest_framework import permissions

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


        
        try:
            #userProfile=UserProfile.objects.get(user_id=user.id)
            client,dbhandle=get_db_handle('pocketclusters')
            collection_name = dbhandle["expenses"]
           
            # Insert the documents
            collection_name.insert_many([data])

            return Response({ 'success': 'Expense added successfully' })
        except:
            return Response({ 'error': 'Something went wrong when trying to add record' })
        

class GetAllExpenses(APIView):
    permission_classes = [permissions.IsAdminUser]
    def get(self, request, format=None):
        user = self.request.user

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
        

class GetExpenseByUserId(APIView):
    def get(self, request, format=None):

        try:
            client,dbhandle=get_db_handle('pocketclusters')
            collection_name = dbhandle["expenses"]
            
           #get all expenses
            #expenses = collection_name.find()
            expenses = collection_name.find(self.request.data)
            # convert this mongo object to a list
            expenses = json.dumps(list(expenses), default=str)
            return Response({'data':expenses})
        except Exception as e:
            return Response({ 'error': e })