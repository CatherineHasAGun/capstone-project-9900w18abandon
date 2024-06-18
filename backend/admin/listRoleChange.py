from flask import request, jsonify
from admin import admin
from flask_jwt_extended import jwt_required, get_jwt_identity
from database import db
@admin.route('/rolechange',methods=['GET'])
@jwt_required()  
def listRoleChange():
    collection=db["RoleChangeApplication"]
    current_user = get_jwt_identity()  # Get user information
    
    if current_user['role'] != 'admin':
        return jsonify({'message': 'Unauthorized. Only admin users can create courses.'}), 403
    
    cursor = collection.find({})  

    messages = []
    for document in cursor:
        message = {
            'name': document['name'],
            'email': document['email'],
            'reason': document['reason'],
            'status': document['status'],
            'apply Time':document['apply time']
        }
        messages.append(message)

    return jsonify({'list': messages}), 201
