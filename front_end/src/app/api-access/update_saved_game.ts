import axios from 'axios';
import {GameState} from '../interfaces/interfaces';
import {environment} from '../../environments/environment';

export const updatedSavedGame = async (game: GameState): Promise<any> => {
  const API_BASE_URL = environment.apiBaseUrl;
  const UPPDATE_GAME_ENDPOINT = '/saved-games';
  const config = {
    method: 'put',
    url: `${API_BASE_URL}${UPPDATE_GAME_ENDPOINT}/${game.worldId}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: game
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error('Failed to update saved game:', error);
    throw error;
  }
};
