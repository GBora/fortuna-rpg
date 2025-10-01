import axios from 'axios';
import {GameState} from '../interfaces/interfaces';
import {environment} from '../../environments/environment';

export const startGame = async (game: GameState): Promise<any> => {
  const API_BASE_URL = environment.apiBaseUrl;
  const GAME_START_ENDPOINT = '/start-game';
  const config = {
    method: 'post',
    url: `${API_BASE_URL}${GAME_START_ENDPOINT}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: game
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error('Failed to start game:', error);
    throw error;
  }
};

