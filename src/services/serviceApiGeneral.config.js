import axios from 'axios';

import { updateToken } from '../utils/updateToken';

export const extraConfig = () => {
  axios.defaults.withCredentials = true;
  return axios.create({
    baseURL: 'https://xsolarx-p6vwit5rt-xsolarxs-projects.vercel.app/api/v1',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${updateToken()}`,
    },
    timeout: 60000,
  });
};
