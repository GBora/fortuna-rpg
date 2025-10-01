import os
import uuid

from flask import Flask, request, jsonify, json
from flask_cors import CORS
from models import db, JsonData
from utils.get_from_config import get_from_config_list, get_from_config_by_id

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(os.path.dirname(__file__), 'game_data', 'data.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

with app.app_context():
    db.create_all()

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
def start_game():
    content = request.json
    content["worldId"] = str(uuid.uuid4())
    if not content or 'worldId' not in content:
        return jsonify({"error": "No JSON data or UUID provided"}), 400

    new_entry = JsonData(id=content['worldId'], data=json.dumps(content))
    db.session.add(new_entry)
    db.session.commit()
    return jsonify(content)

@app.route('/saved-games', methods=['GET'])
def get_saved_games():

    all_entries = JsonData.query.all()

    saves = []
    for entry in all_entries:
        try:
            data = json.loads(entry.data)
            save = {
                "worldId": data['worldId'],
                "hero": data['hero']
            }
            saves.append(save)
        except json.JSONDecodeError:
            # Handle invalid JSON (optional)
            continue
    return jsonify(saves)

@app.route('/saved-games/<id>', methods=['GET'])
def get_saved_game(id):

    savedGame = JsonData.query.get(id)
    data = json.loads(savedGame.data)

    return jsonify(data)

# saved-games/id PUT

# saved-games/id DELETE

if __name__ == '__main__':
    # Use environment variables for config (e.g., port)
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)