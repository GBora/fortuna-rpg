import axios from 'axios';
import {PlayerHero} from '../interfaces/interfaces';
import { environment } from '../../environments/environment';


export interface SavedGameData {
  worldId: string,
  hero: PlayerHero
}

export const getSavedGamesList = async (): Promise<SavedGameData[]> => {
  const API_BASE_URL = environment.apiBaseUrl;
  const SAVED_GAMES_ENDPOINT = '/saved-games';

  const config = {
    method: 'get',
    url: `${API_BASE_URL}${SAVED_GAMES_ENDPOINT}`,
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
