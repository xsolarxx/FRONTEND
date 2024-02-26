import { extraConfig } from "./serviceApiGeneral.config";

// ForumRoutes.post("/create", [isAuth], upload.single("image"), createForum);

export const createForum = async (formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.post(`/forum/create`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

// ForumRoutes.patch("/update/:id", update);

export const update = async (id, formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.patch(`/forum/update/${id}`, formData)
    .then((res) => res)
    .catch((error) => error);
};

// DELETE ForumRoutes.delete("/:id", deleteForum);

export const deleteForum = async (id) => {
  const APIGeneral = extraConfig();

  return APIGeneral.delete(`/forum/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

// ForumRoutes.get("/getbyid/:id", getById);

export const getById = async (id) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/forum/getbyid/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

// ForumRoutes.get("/getAll", getAll);

export const getAll = async () => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/forum/getAll/`)
    .then((res) => res)
    .catch((error) => error);
};
