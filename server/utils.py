from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import os
def get_db_handle(db_name):
    uri = os.environ.get('DB_URL')
    # Create a new client and connect to the server
    client = MongoClient(uri, server_api=ServerApi('1'))
    # Send a ping to confirm a successful connection
    try:
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print(e)

    db_handle = client[db_name]
    return client, db_handle
