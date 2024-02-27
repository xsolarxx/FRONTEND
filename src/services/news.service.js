import { extraConfig } from "./serviceApiGeneral.config";

//----------------------------* CREATE *------------------------------------------------------------------

export const createNews = async (formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.post(`/news/create`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//-----------------------------* UPDATE *----------------------------------------------

export const update = async (id, formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.patch(`/news/update/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};
//-----------------------------* DELETE *----------------------------------------------------

export const deleteNews = async (id) => {
  const APIGeneral = extraConfig();

  return APIGeneral.delete(`/news/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

//------------------------------* GET BY ID *----------------------------------------------------

export const getById = async (id) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/news/getbyid/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

//------------------------------* GET BY TAGS *----------------------------------------------------

export const getByTags = async (formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/news/getbytags/`, formData)
    .then((res) => res)
    .catch((error) => error);
};

//--------------------------------* GET ALL*----------------------------------------------------

export const getAll = async () => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/news/getall/`)
    .then((res) => res)
    .catch((error) => error);
};
