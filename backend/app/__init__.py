from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_pyfile('../config.py')
    app.config.from_object('backend.config.Config')

    db.init_app(app)
    migrate.init_app(app, db)

    from backend.app.api.user_api import user_api
    app.register_blueprint(user_api)
    from backend.app.api.post_api import post_api
    app.register_blueprint(post_api)

    return app