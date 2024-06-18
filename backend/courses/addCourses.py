from flask import request, jsonify
from courses import courses
from flask_jwt_extended import jwt_required, get_jwt_identity
@courses.route('/add',methods=['POST'])
@jwt_required() 
def addCourses():
    
    current_user = get_jwt_identity()  
    
    if current_user['role'] != 'student':
        return jsonify({'message': 'Unauthorized. Only admin users can create courses.'}), 403

    return jsonify({'message': 'Course created successfully.'}), 201

@courses.route('/edit/<course_id>', methods=['PUT'])
@jwt_required()
def edit_course(course_id):
    current_user = get_jwt_identity()

    if current_user['role'] != 'admin':
        return jsonify({'message': 'Unauthorized. Only admin users can edit courses.'}), 403

    return jsonify({'message': 'Course edited successfully.'}), 200

@courses.route('/delete/<course_id>', methods=['DELETE'])
@jwt_required()
def delete_course(course_id):
    current_user = get_jwt_identity()

    if current_user['role'] != 'admin':
        return jsonify({'message': 'Unauthorized. Only admin users can delete courses.'}), 403

    return jsonify({'message': 'Course deleted successfully.'}), 200

