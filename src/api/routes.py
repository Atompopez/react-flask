"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/user', methods=['POST'])
def user_registro():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User(email = email, password = password , is_active = True)
    db.session.add(user)
    db.session.commit()

    return 'usuario creado', 200

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"msg":"User isn't exist"}), 401
    if password != user.password :
        return jsonify({"msg": "Bad password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.route("/profile", methods=["GET"])
@jwt_required()
def profile():

    user_email = get_jwt_identity()
    return jsonify(logged_in_as = user_email), 200