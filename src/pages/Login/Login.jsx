import './Login.css';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';

import { useAuth } from '../../context/authContext';
import { useLoginError } from '../../hooks/useLoginError';
import { loginUserService } from '../../services/user.service';

//-------------------* CREACIÓN DE ESTADOS E INSTACIAS A HOOK *--------------------------------
export const Login = () => {
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
   * este va  a recibir un objeto con los diferntes elementos registrados ( con el metodo de arriba)*/

  //?-------------------2) GESTION DE LA INFD DEL FORMULARIO Y LLAMADA AL SERVICIO---------------

  const formSubmit = async (formData) => {
    /**
     * El formData es un parametro que recibe un objeto con todas las claves con los valores registrados
     */

    console.log('FORMDATA', formData);
    setSend(true);
    setRes(await loginUserService(formData));
    setSend(false);
  };

  //?-------------------3) GESTION DE RESPUESTA DEL SERVICIO-------------------------------------

  useEffect(() => {
    console.log(res);
    useLoginError(res, setRes, login, setLoginOk);
  }, [res]);

  /** Nada mas montarse el componente el user lo deslogamos en caso de que este logado por lo cual
   * lo borro del contexto en el estado de user
   * y lo borro del localStorage */

  useEffect(() => {
    setUser(() => null);
    localStorage.removeItem('user');
  }, []);

  //?-----3) GESTION DE QUE HACEMOS CUANDO LA FUNCIONALIDAD DE LA PAGINA ESTA REALIZADA----------
  if (loginOk) {
    if (res.data?.user?.check == false) {
      return <Navigate to="/verifyCode" />;
    } else {
      return <Navigate to="/dashboard" />;
    }
  }

  return (
    <>
      <div className="login_container">
        <form className="formLogin email_container1" onSubmit={handleSubmit(formSubmit)}>
          <h4>Login</h4>

          <label htmlFor="input_email" className="input_email">
            <input
              className="input_email"
              type="email"
              id="email"
              name="email"
              autoComplete="false"
              {...register('email', { required: true })}
              placeholder="Email"
            />
          </label>

          <label htmlFor="input_password" className="input_Password">
            <input
              className="input_Password"
              type="password"
              id="password"
              name="password"
              autoComplete="false"
              {...register('password', { required: true })}
              placeholder="Password"
            />
          </label>

          <button
            className="button--blue"
            type="submit"
            disabled={send}
            style={{ background: send ? '' : 'color-disabled-green' }}
          >
            Login
          </button>

          <div className="btn_container">
            <ul className="ulogin">
              <li>
                <p className="p-xs">Have you forgotten your password?</p>
                <Link className="linkr1 p-xs" to="/forgotpassword">
                  Click here to reset your password
                </Link>
              </li>
              <li>
                <p className="p-xs">Are you not registered?</p>
                <Link to="/register">
                  <a className="linkr2 p-xs">Register here!</a>
                </Link>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </>
  );
};
