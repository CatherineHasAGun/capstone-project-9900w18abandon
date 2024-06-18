from flask import request, jsonify
from admin import admin
from flask_jwt_extended import jwt_required, get_jwt_identity
from database import db
@admin.route('/rolechange',methods=['POST'])
@jwt_required()  
def RoleChange():
    collection=db["RoleChangeApplication"]
    user=db["UserInfo"]
    current_user = get_jwt_identity()  
    
    if current_user['role'] != 'admin':
        return jsonify({'message': 'Unauthorized. Only admin users can create courses.'}), 403
    
    document=request.get_json()
    if not collection.find_one({'email': document['application']['email']}):
        return jsonify({'list':'Expired'}), 400
    if document['reply']=='APPROVED':
        collection.delete_one({'email': document['application']['email']})
        user.update_one({'mail':document['application']['email']},{'$set':{'role':'academic'}})
        return jsonify({'list':' role change success'}), 200
    else:
        collection.update_one({ 'email': document['application']['email']},{'$set':{'status':f"Rejected:{document['message']}"}})
        return jsonify({'list':' apply not success'}), 200
    
