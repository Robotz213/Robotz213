from dotenv import dotenv_values
from eventlet.wsgi import server
from eventlet import listen
from app import create_app


values = dotenv_values()

if __name__ == "__main__":

    app = create_app()
    debug = values.get("DEBUG", "False").lower() in ("true", "1", "t", "y", "yes")

    if debug:
        app.run(port=8282, debug=debug)

    if not debug:
        server(listen(("127.0.0.1", 8282)), app)
