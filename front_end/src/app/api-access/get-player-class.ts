import axios from 'axios';
import {IFaction, IPlayerClassWithStats, IRaceWithStats} from '../interfaces/interfaces';

export const getPlayerClass = async (id:string): Promise<IPlayerClassWithStats> => {
  const API_BASE_URL = 'http://localhost:5000';
  const PLAYER_FACTIONS_ENDPOINT = '/player-classes';

  const config = {
    method: 'get',
    url: `${API_BASE_URL}${PLAYER_FACTIONS_ENDPOINT}/${id}`,
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
