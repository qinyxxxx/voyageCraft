from flask import jsonify, request
from backend.app.models import db, User
from . import user_api


@user_api.route('/api/profile/<int:user_id>', methods=['GET'])
def get_user_profile(user_id):
    user = User.query.get(user_id)
    if user is None:
        return jsonify({'error': 'User not found'}), 404
    return jsonify({'id': user.user_id, 'name': user.username, 'email': user.email, 'intro': user.bio})

@user_api.route('/api/profile/<int:user_id>', methods=['PUT'])
def update_user_profile(user_id):
    user = User.query.get(user_id)
    if user is None:
        return jsonify({'error': 'User not found'}), 404
    data = request.json
    user.username = data.get('name', user.username)
    user.email = data.get('email', user.email)
    user.bio = data.get('intro', user.bio)
    db.session.commit()
    return jsonify({'message': 'User updated'})