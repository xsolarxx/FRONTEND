import { extraConfig } from "./serviceApiGeneral.config";

// CommentRoutes.get("/getall", getAll);

export const getAll = async (id) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/comment/getAll/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

// CommentRoutes.get("/getbyid/:id", getById);

export const getById = async (id) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/comment/getbyid/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

// CommentRoutes.post("/create/:idRecipient", [isAuth], createComment);

export const createComment = async (idRecipient, formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.post(`/comment/create/${idRecipient}`, formData)
    .then((res) => res)
    .catch((error) => error);
};

// CommentRoutes.delete("/comments/:idComment", [isAuth], deleteComment);

export const deleteComment = async (idComment) => {
  const APIGeneral = extraConfig();

  return APIGeneral.post(`/comment/comments/${idComment}`)
    .then((res) => res)
    .catch((error) => error);
};

// CommentRoutes.patch("/update/:id", update);

export const update = async (id) => {
  const APIGeneral = extraConfig();

  return APIGeneral.patch(`/comment/update/${id}`)
    .then((res) => res)
    .catch((error) => error);
};
