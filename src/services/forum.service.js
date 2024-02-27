import { extraConfig } from './serviceApiGeneral.config';

export const createForum = async (formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.post(`/forum/create`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then((res) => res)
    .catch((error) => error);
};

export const update = async (id, formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.patch(`/forum/update/${id}`, formData, {
    headers: { 'Content-Type': 'form-data' },
  })
    .then((res) => res)
    .catch((error) => error);
};

export const deleteForum = async (id) => {
  const APIGeneral = extraConfig();

  return APIGeneral.delete(`/forum/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

export const getById = async (id) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/forum/getbyid/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

export const getAll = async () => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/forum/getAll/`)
    .then((res) => res)
    .catch((error) => error);
};
