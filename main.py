from dotenv import dotenv_values
from eventlet.wsgi import server
from eventlet import listen
from app import create_app


values = dotenv_values()

if __name__ == "__main__":

    app = create_app()
    server(listen(("127.0.0.1", 5000)), app)
        
