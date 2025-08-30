import axios from 'axios';
import {IFaction} from '../interfaces/interfaces';

export const getPlayerFactions = async (): Promise<IFaction[]> => {
  const API_BASE_URL = 'http://localhost:5000';
  const PLAYER_FACTIONS_ENDPOINT = '/player-factions';

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
    console.error('Failed to fetch player factions:', error);
    throw error;
  }
};

