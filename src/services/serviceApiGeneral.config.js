import axios from 'axios';

import { updateToken } from '../utils/updateToken';

export const extraConfig = () => {
  return axios.create({
    baseURL: 'https://xsolarx-71hfd923x-xsolarxs-projects.vercel.app',

    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${updateToken()}`,
    },
    timeout: 60000,
  });
};
