import "./Login.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { loginUserService } from "../services/user.service";
import { useLoginError } from "../hooks";

export const Login = () => {
  //!--------------------------------------------------------------------------------------------
  //?-------------------1) CREACION DE ESTADOS E INSTACIAS A HOOK--------------------------------
  //!--------------------------------------------------------------------------------------------

  const { register, handleSubmit } = useForm();
  const [send, setSend] = useState(false); // estado que gestiona cuando se esta enviando una peticion para deshabilitar los botones
  const [res, setRes] = useState({}); // estado donde se setea la respuesta de la API
  const [loginOk, setLoginOk] = useState(false); // estado para saber que el login esta ok
  const { login, setUser } = useAuth(); // nos traemos la funcion de login y el seteo del user del contexto de authenticacion
  /**
   * register-> nosd serviria para registrar info dentro de los diferentes
   * input del formulario
   *
   * handleSubmit -> es un metodo que se encarga de gestionar el evento submit del formulario y
   * este va  a recibir un objeto con los diferntes elementos registrados ( con el metodo de arriba)
   */
  //!--------------------------------------------------------------------------------------------
  //?-------------------2) GESTION DE LA INFD DEL FORMULARIO Y LLAMADA AL SERVICIO---------------
  //!--------------------------------------------------------------------------------------------
  const formSubmit = async (formData) => {
    /**
     * El formData es un parametro que recibe un objeto con todas las claves con los valores registrados
     */

    console.log("FORMDATA", formData);
    setSend(true);
    setRes(await loginUserService(formData));
    setSend(false);
  };

  //!--------------------------------------------------------------------------------------------
  //?-------------------3) GESTION DE RESPUESTA DEL SERVICIO-------------------------------------
  //!--------------------------------------------------------------------------------------------

  useEffect(() => {
    console.log(res);
    useLoginError(res, setRes, login, setLoginOk);
  }, [res]);

  /**
   * Nada mas montarse el componente el user lo deslogamos en caso de que este logado por lo cual
   * lo borro del contexto en el estado de user
   * y lo borro del localStorage
   */

  useEffect(() => {
    setUser(() => null);
    localStorage.removeItem("user");
  }, []);

  //!--------------------------------------------------------------------------------------------
  //?-----3) GESTION DE QUE HACEMOS CUANDO LA FUNCIONALIDAD DE LA PAGINA ESTA REALIZADA----------
  //!--------------------------------------------------------------------------------------------

  if (loginOk) {
    if (res.data?.user?.check == false) {
      return <Navigate to="/verifyCode" />;
    } else {
      return <Navigate to="/dashboard" />;
    }
  }

  return (
    <>
      <div className="form-wrap">
        <h1>Sign In</h1>
        <p>We are happy to see you again 💌</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="email_container form-group">
            <input
              className="input_user"
              type="email"
              id="email"
              name="email"
              autoComplete="false"
              {...register("email", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              email
            </label>

            <div className="password_container form-group">
              <input
                className="input_user"
                type="password"
                id="password"
                name="password"
                autoComplete="false"
                {...register("password", { required: true })}
              />
              <label htmlFor="custom-input" className="custom-placeholder">
                password
              </label>
            </div>
          </div>

          <div className="btn_container">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
            >
              LOGIN
            </button>
          </div>
          <p className="bottom-text">
            <small>
              Have you forgotten the password?
              <Link to="/forgotpassword" className="anchorCustom">
                Change password
              </Link>
            </small>
          </p>
        </form>
      </div>
      <div className="footerForm">
        <p className="parrafoLogin">
          Are you not registered? <Link to="/register">Register Here</Link>
        </p>
      </div>
    </>
  );
};
