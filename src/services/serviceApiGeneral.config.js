import axios from 'axios';

import { updateToken } from '../utils/updateToken';

/**
 * Tenemos que cambiar la URL
 *
 */
export const extraConfig = () => {
  return axios.create({
    baseURL: 'https://xsolarx-gtf92f30z-xsolarxs-projects.vercel.app/api/v1',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${updateToken()}`,
    },
    timeout: 60000,
  });
};
