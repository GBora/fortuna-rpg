import axios from 'axios';
import {environment} from '../../environments/environment';

export const deleteSavedGame = async (id:string): Promise<void> => {
  const API_BASE_URL = environment.apiBaseUrl;
  const DELETE_ENDPOINT = '/saved-games';

  const config = {
    method: 'delete',
    url: `${API_BASE_URL}${DELETE_ENDPOINT}/${id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios(config);
  } catch (error) {
    console.error('Failed to delete saved game:', error);
    throw error;
  }
};
