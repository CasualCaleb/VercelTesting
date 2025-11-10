from flask import request
from pymongo import MongoClient

uri = "mongodb+srv://CasualCaleb:GDD8tvad5u95UvDD@cluster0.sifoxlk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

client = MongoClient(uri)
collection = client['reviews']['collection']

def add_review():
    data = request.get_json()
    data = {
        'name': data.get('name'),
        'comment': data.get('comment'),
    }
    collection.insert_one(data)

    return 'Success'

def get_reviews():
    reviews = collection.find()
    data = []

    for review in reviews:
        review['_id'] = str(review['_id'])
        data.append(review)
    return data