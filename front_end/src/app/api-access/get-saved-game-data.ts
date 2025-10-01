import axios from 'axios';
import {environment} from '../../environments/environment';
import {GameState} from '../interfaces/interfaces';

export const getSavedGameById = async (id: string): Promise<GameState> => {
  const API_BASE_URL = environment.apiBaseUrl;
  const PLAYER_SAVES_ENDPOINT = '/saved-games';

  const config = {
    method: 'get',
    url: `${API_BASE_URL}${PLAYER_SAVES_ENDPOINT}/${id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch saved games:', error);
    throw error;
  }
};
