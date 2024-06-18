from flask import request, jsonify, session
from auth import auth
from flask_jwt_extended import JWTManager, jwt_required,get_jwt
from database import db
from jwt_utils import  revoked_tokens


@auth.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    
    session.pop('user', None)

    jti = get_jwt()['jti']
    revoked_tokens.add(jti)
    return jsonify({'message': 'Logout successful'}), 200
