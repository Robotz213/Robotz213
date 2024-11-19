from uuid import uuid4
from dotenv import dotenv_values
import os

env_vars = dotenv_values(os.path.join(os.getcwd()))

if env_vars.get("MAIL_SERVER"):
    MAIL_SERVER = env_vars["MAIL_SERVER"]
    MAIL_PORT = 587
    MAIL_USE_TLS = True
    MAIL_USERNAME = env_vars["EMAIL"]
    MAIL_PASSWORD = env_vars["PASSWORD_EMAIL"]

# Configurações do Flask
PREFERRED_URL_SCHEME = "https"
SESSION_COOKIE_HTTPONLY = False
SESSION_COOKIE_SECURE = True
SECRET_KEY = uuid4()
