import axios from 'axios';
import {GameState} from '../interfaces/interfaces';

export const startGame = async (game: GameState): Promise<any> => {
  const API_BASE_URL = 'http://localhost:5000';
  const PLAYER_FACTIONS_ENDPOINT = '/start-game';

  const config = {
    method: 'post',
    url: `${API_BASE_URL}${PLAYER_FACTIONS_ENDPOINT}`,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(game)
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch player class:', error);
    throw error;
  }
};
