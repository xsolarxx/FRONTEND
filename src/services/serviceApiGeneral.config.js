import axios from 'axios';

import { updateToken } from '../utils/updateToken';

/**
 * Tenemos que cambiar la URL
 *
 */
export const extraConfig = () => {
  return axios.create({
    baseURL: 'https://frontend-iota-three-81.vercel.app',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${updateToken()}`,
    },
    timeout: 60000,
  });
};
