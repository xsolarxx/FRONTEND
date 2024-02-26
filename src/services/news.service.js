import { extraConfig } from "./serviceApiGeneral.config";

//----------------------------* CREATE *------------------------------------------------------------------
// NewsRoutes.post("/create", [isAuthAdmin], upload.single("image"), createNews);

export const createNews = async (formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.post(`/news/create`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//-----------------------------* UPDATE *----------------------------------------------
//NewsRoutes.patch("/update/:id", update);

export const update = async (id, formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.patch(`/news/update/${id}`, formData)
    .then((res) => res)
    .catch((error) => error);
};

//-----------------------------* DELETE *----------------------------------------------------
//NewsRoutes.delete("/:id", deleteNews);

export const deleteNews = async (id) => {
  const APIGeneral = extraConfig();

  return APIGeneral.delete(`/news/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

//------------------------------* GET BY ID *----------------------------------------------------
//NewsRoutes.get("/getbyid/:id", getById);

export const getById = async (id) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/news/getbyid/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

//------------------------------* GET BY TAGS *----------------------------------------------------
//NewsRoutes.get("/getbytags", getByTags);

export const getByTags = async () => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/news/getbytags/`)
    .then((res) => res)
    .catch((error) => error);
};

//--------------------------------* GET ALL*----------------------------------------------------
//NewsRoutes.get("/getall", getAll);

export const getAll = async () => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/news/getall/`)
    .then((res) => res)
    .catch((error) => error);
};
