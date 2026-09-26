from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "SanskritiSetu Backend is Running!"


@app.route("/health")
def health():
    return jsonify({
        "status": "ok",
        "message": "SanskritiSetu backend is healthy"
    })


if __name__ == "__main__":
    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )