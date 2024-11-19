from flask import Flask

# from flask_mail import Mail
from flask_bootstrap import Bootstrap5
from importlib import import_module

# mail = Mail()
bootstrap = Bootstrap5()
app = None


class AppFactory:

    def create_app(self) -> Flask:

        global app
        app = Flask(__name__)
        app.config.from_object("app.default_config")
        self.init_extensions(app)

        with app.app_context():
            import_module("app.routes", __package__)

        return app

    def init_extensions(self, app: Flask):

        # mail.init_app(app)
        bootstrap.init_app(app)


create_app = AppFactory().create_app
