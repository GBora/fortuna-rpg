import os
import uuid

from flask import Flask,request, jsonify
from flask_cors import CORS
from utils.get_from_config import get_from_config_list, get_from_config_by_id

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/player-factions', methods=['GET'])
def get_player_factions():
    data = get_from_config_list("data/player_factions.json")
    return jsonify(data)

@app.route('/player-races/<id>', methods=['GET'])
def get_player_races(id):
    data = get_from_config_by_id(id, "data/player_races.json")
    return jsonify(data)

@app.route('/player-classes/<id>', methods=['GET'])
def get_player_classes(id):
    data = get_from_config_by_id(id, "data/player_classes.json")
    return jsonify(data)

@app.route('/start-game', methods=['POST'])
def start_game(game):
    content = request.json
    content["worldId"] = uuid.uuid4()
    # generate rooms
    return jsonify(content)

if __name__ == '__main__':
    # Use environment variables for config (e.g., port)
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)