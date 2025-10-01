import axios from 'axios';
import {PlayerHero} from '../interfaces/interfaces';



export const getSavedGamesList = async (): Promise<any> => {
  const API_BASE_URL = 'http://localhost:5000';
  const PLAYER_FACTIONS_ENDPOINT = '/saved-games';

  const config = {
    method: 'get',
    url: `${API_BASE_URL}${PLAYER_FACTIONS_ENDPOINT}`,
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
