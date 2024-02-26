import { extraConfig } from "./serviceApiGeneral.config";

// RatingRoutes.get("/getall", getAll);

export const getAll = async (id) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/Rating/getAll/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

// RatingRoutes.get("/getbyid/:id", getById);

export const getById = async (id) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/Rating/getbyid/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

// RatingRoutes.post("/create/:idRecipient", [isAuth], ratingComment);

export const createRating = async (customBody) => {
  const APIGeneral = extraConfig();

  return APIGeneral.post(`/Rating/create/${customBody}`, )
    .then((res) => res)
    .catch((error) => error);
};

// RatingRoutes.patch("/update/:id", update);

export const update = async (id) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/Rating/update/${id}`)
    .then((res) => res)
    .catch((error) => error);
};
