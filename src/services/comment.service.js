import { updateToken } from '../utils/updateToken';
import { extraConfig } from './serviceApiGeneral.config';

export const getAll = async () => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/comment/getAll/`)
    .then((res) => res)
    .catch((error) => error);
};

export const getById = async (id) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/comment/getbyid/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

export const createComment = async (idRecipient, formData) => {
  const APIGeneral = extraConfig();
  console.log('id', idRecipient);

  return APIGeneral.post(`/comment/create/${idRecipient}`, formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => error);
};

export const deleteComment = async (idComment) => {
  const APIGeneral = extraConfig();

  return APIGeneral.delete(`/comment/comments/${idComment}`)
    .then((res) => res)
    .catch((error) => error);
};

export const update = async (id, formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.patch(`/comment/update/${id}`, formData)
    .then((res) => res)
    .catch((error) => error);
};

export const getByRecipient = async (recipientType, id) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/comment/${recipientType}/${id}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => error);
};
