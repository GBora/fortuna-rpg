import axios from 'axios';
import {PlayerClassWithStats} from '../interfaces/interfaces';
import {environment} from '../../environments/environment';

export const getPlayerClass = async (id:string): Promise<PlayerClassWithStats> => {
  const API_BASE_URL = environment.apiBaseUrl;
  const PLAYER_CLASS_ENDPOINT = '/player-classes';

  const config = {
    method: 'get',
    url: `${API_BASE_URL}${PLAYER_CLASS_ENDPOINT}/${id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch player class:', error);
    throw error;
  }
};
