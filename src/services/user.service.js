import { updateToken } from '../utils/updateToken';
import { extraConfig } from './serviceApiGeneral.config';


//* ------------------ endPoints sin auth ---------------------------------------

//* Register with redirect
export const registerWithRedirect = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post('/users/register', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then((res) => res)
    .catch((error) => error);
};

//*Resend code
export const resendConfirmationCode = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post('/users/resend', formData)
    .then((res) => res)
    .catch((error) => error);
};

//*Check new user
export const checkNewUser = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post('/users/check', formData)
    .then((res) => res)
    .catch((error) => error);
};

//*Login user

export const loginUserService = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post('/users/login', formData)
    .then((res) => res)
    .catch((error) => error);
};
//* autologin
export const autoLogin = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post('/users/login/autologin', formData)
    .then((res) => res)
    .catch((error) => error);
};

//*GetAll
export const getAll = async () => {
  const APIGeneral = extraConfig();
  return APIGeneral.get('/users/getall')
    .then((res) => res)
    .catch((error) => error);
};

//*Get by id
export const getById = async (id) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/users/getById/${id}`)
    .then((res) => res)
    .catch((error) => error);
};
//* Forgot password sin authentificacion

export const changePassword = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch('/users/forgotpassword', formData)
    .then((res) => res)
    .catch((error) => error);
};
//*Send code
export const sendCode = async (id) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post(`/users/register/sendMail${id}`)
    .then((res) => res)
    .catch((error) => error);
};
//*Send password
export const sendPassword = async (id) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post(`/users/sendPassword${id}`)
    .then((res) => res)
    .catch((error) => error);
};

//* endPoints con auth --------------------------------------

//*Delete user

export const deleteUser = async (id) => {
  const APIGeneral = extraConfig();
  return APIGeneral.delete(`/users/deleteUser${id}`)
    .then((res) => res)
    .catch((error) => error);
};
//*Change password with authentification

export const modifyPassword = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch('/users/changepassword', formData)
    .then((res) => res)
    .catch((error) => error);
};

//*Update user
export const update = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch('users/update/update', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then((res) => res)
    .catch((error) => error);
};

//* Toggle fav comment

export const toggleFavComments = async (idComment) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch(`/users/commentFav${idComment}`)
    .then((res) => res)
    .catch((error) => error);
};
//* Toggle like company
export const toggleLikedCompany = async (idCompany) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch(`/users/likedCompany${idCompany}`)
    .then((res) => res)
    .catch((error) => error);
};
//* Toggle like news
export const toggleLikedNews = async (idNews) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch(`/users/likedNews${idNews}`)
    .then((res) => res)
    .catch((error) => error);
};
//* Toggle like Forum
export const toggleLikedForum = async (idForum) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch(`/users/likedForum${idForum}`)
    .then((res) => res)
    .catch((error) => error);
};
//* Toggle follow user
export const toggleFollow = async (userToFollow) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch(`/users/follow${userToFollow}`)
    .then((res) => res)
    .catch((error) => error);
};
//* Toggle follow forum
export const toggleFollowedForum = async (idForum) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch(`/users/follow/forum${idForum}`)
    .then((res) => res)
    .catch((error) => error);
};
