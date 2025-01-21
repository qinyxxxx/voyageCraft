from flask import request
from backend.app.models import db, Post
from ..utils.serializer import PostSerializer
from ..utils.pagination import Pagination
from ..utils.response_util import ResponseUtil
from . import post_api


@post_api.route('/api/posts', methods=['GET'])
def get_posts():
    query = Post.query.order_by(Post.update_time.desc())
    paginated_data = Pagination.paginate(query, schema=PostSerializer)
    return ResponseUtil.success(data=paginated_data)


@post_api.route('/api/posts/<int:post_id>', methods=['GET'])
def get_post(post_id):
    """
    Get a single post by ID.
    """
    post = Post.query.get(post_id)
    if not post:
        return ResponseUtil.error(message="Post not found", status_code=404)
    return ResponseUtil.success(data=PostSerializer.serialize(post))


@post_api.route('/api/posts', methods=['POST'])
def create_post():
    """
    Create a new post.
    """
    data = request.json
    new_post = Post(
        title=data.get('title'),
        content=data.get('content'),
        user_id=data.get('author_id'),  # Assumes author ID is provided
        post_status=data.get('status', 1)  # Default to 'Draft'
    )
    db.session.add(new_post)
    db.session.commit()
    return ResponseUtil.success(message="Post created successfully", data=PostSerializer.serialize(new_post),
                                status_code=201)


@post_api.route('/api/posts/<int:post_id>', methods=['PUT'])
def update_post(post_id):
    """
    Update a post by ID.
    """
    post = Post.query.get(post_id)
    if not post:
        return ResponseUtil.error(message="Post not found", status_code=404)

    data = request.json
    post.title = data.get('title', post.title)
    post.content = data.get('content', post.content)
    post.post_status = data.get('status', post.post_status)
    db.session.commit()
    return ResponseUtil.success(message="Post updated successfully", data=PostSerializer.serialize(post))