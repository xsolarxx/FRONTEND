import { extraConfig } from "./serviceApiGeneral.config";

//---------------------- * CREATE * ----------------------------------------

export const createCompany = async (formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.post(`/company/create`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//---------------------- * GET BY NAME COMPANY * --------------------------------------------------

export const getByNameCompany = async (formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/company/byName`, formData)
    .then((res) => res)
    .catch((error) => error);
};

//---------------------- * GET ALL COMPANY * --------------------------------------------------

export const getAllCompany = async () => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/company/getall`)
    .then((res) => res)
    .catch((error) => error);
};

//---------------------- * GET BY SERVICES COMPANY * --------------------------------------------------

export const getByServicesCompany = async (formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/company/companybyservices/services/`, formData)
    .then((res) => res)
    .catch((error) => error);
};

//---------------------- * GET BY LIKES COMPANY * --------------------------------------------------

export const getByLikesCompany = async () => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/company/getByAscLikes/likes`)
    .then((res) => res)
    .catch((error) => error);
};

//---------------------- * GET BY DES LIKES COMPANY * --------------------------------------------------

export const getByDescLikesCompany = async () => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/company/getByDescLikes/likes`)
    .then((res) => res)
    .catch((error) => error);
};

//---------------------- * UPDATE COMPANY * --------------------------------------------------

export const updateCompany = async (id, formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.patch(`/company/update/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};
//---------------------- * DELETE COMPANY * --------------------------------------------------

export const deleteCompany = async (idCompany) => {
  const APIGeneral = extraConfig();

  return APIGeneral.delete(`/company/company/${idCompany}`)
    .then((res) => res)
    .catch((error) => error);
};
