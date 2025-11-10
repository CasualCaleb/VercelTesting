from flask import Blueprint, jsonify
import app.mongo as mongo

bp = Blueprint('blueprint', __name__)

@bp.route('/')
def root():
    return "Welcome to the root", 200

@bp.route('/api')
def root_api():
    return "Welcome to the API", 200

@bp.route('/api/reviews', methods=['POST'])
def add_review():
    review = mongo.add_review()
    if review:
        return {'message': review}, 200
    return 'Error', 404

@bp.route('/api/reviews', methods=['GET'])
def get_reviews():
    reviews = mongo.get_reviews()
    if reviews:
        return jsonify(reviews), 200
    return 'Error', 404