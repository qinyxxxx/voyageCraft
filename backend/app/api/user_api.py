from flask import request
from backend.app.models import User
from . import user_api
from backend.app.utils.serializer import UserSerializer
from ..utils.response_util import ResponseUtil


@user_api.route('/api/profile/<int:user_id>', methods=['GET'])
def get_user_profile(user_id):
    user = User.query.get(user_id)
    if not user:
        return ResponseUtil.error(message="User not found", status_code=404)
    return ResponseUtil.success(data=UserSerializer.serialize(user))


@user_api.route('/api/profile/<int:user_id>', methods=['PUT'])
def update_user_profile(user_id):
    user = User.query.get(user_id)
    if not user:
        return ResponseUtil.error(message="User not found", status_code=404)
    data = request.json
    updated_user = UserSerializer.update(user, data) # serializer the data to update
    return ResponseUtil.success(
        message="User updated successfully",
        data=UserSerializer.serialize(updated_user)
    )