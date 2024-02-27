import { extraConfig } from "./serviceApiGeneral.config";

export const getAll = async () => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/rating/getAll`)
    .then((res) => res)
    .catch((error) => error);
};

export const getById = async (id) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/rating/getbyid/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

export const createRating = async (formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.post(`/rating/create/`, formData)
    .then((res) => res)
    .catch((error) => error);
};

export const update = async (id, formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/rating/update/${id}`, formData)
    .then((res) => res)
    .catch((error) => error);
};
