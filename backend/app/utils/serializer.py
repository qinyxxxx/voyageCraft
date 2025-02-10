from backend.app.models import db, User

class UserSerializer:
    @staticmethod
    def serialize(user):
        return {
            "id": user.user_id,
            "name": user.username,
            "email": user.email,
            "intro": user.bio
        }

    @staticmethod
    def update(user, data):
        """
        Update user fields based on provided data.
        """
        user.username = data.get('name', user.username)
        user.email = data.get('email', user.email)
        user.bio = data.get('bio', user.bio)
        db.session.commit()
        return user

class PostSerializer:
    @staticmethod
    def serialize(post):
        return {
            "id": post.post_id,
            "title": post.title,
            "content": post.content,
            "user_id": post.user_id,
            "create_time": post.create_time,
            "update_time": post.update_time,
            "status": post.post_status
        }