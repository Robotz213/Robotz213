from werkzeug.exceptions import HTTPException

from flask import redirect, url_for

from app import app


@app.errorhandler(HTTPException)
def handle_http_exception(error):
    # from deep_translator import GoogleTranslator
    # tradutor = GoogleTranslator(source="en", target="pt")
    # name = tradutor.translate(error.name)
    # desc = tradutor.translate(error.description)

    return redirect(url_for("index"))
