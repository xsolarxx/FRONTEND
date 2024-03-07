import './CheckCode.css';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../../context/authContext';
import { useAutoLogin, useCheckCodeError, useResendCodeError } from '../../hooks';
//*checkCodeConfirmationUser
//*resendCodeConfirmationUser
import { checkNewUser, resendCode } from '../../services/user.service';

export const CheckCode = () => {
  const { allUser, login, logout } = useAuth();
  const { register, handleSubmit } = useForm();
  // EL RES Va a ser para el check del code
  const [res, setRes] = useState({});
  // resResend va a ser para gestionar el renvio del codigo de confirmacion
  const [resResend, setResResend] = useState({});
  const [send, setSend] = useState(false);
  const [okCheck, setOkCheck] = useState(false);

  // ------> estos dos estados se utilizan para cuando se recarga la pagin por el usuario
  const [okDeleteUser, setOkDeleteUser] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  //! -------FUNCION QUE GESTIONA LA DATA DEL FORMULARIO-------
  const formSubmit = async (formData) => {
    const fetching = async (body) => {
      setSend(true);
      setRes(await checkNewUser(body));
      setSend(false);
    };

    const userLocal = localStorage.getItem('user'); // usuarios guardados en localStorage

    if (userLocal == null) {
      /// entramos por el register
      const custFormData = {
        confirmationCode: parseInt(formData.confirmationCode),
        email: allUser.data.user.email,
      };
      fetching(custFormData);
    } else {
      // estamos entrando por el login
      const parseUser = JSON.parse(userLocal);
      const customFormData = {
        email: parseUser.email,
        confirmationCode: parseInt(formData.confirmationCode),
      };
      fetching(customFormData);
    }
  };
  // --------------------------------------------------------------
  const handleReSend = async () => {
    const userLocal = localStorage.getItem('user');

    if (userLocal != null) {
      // viene el USER DEL LOGIN
      const parseUser = JSON.parse(userLocal);
      const customFormData = {
        email: parseUser.email,
      };

      setSend(true);
      setResResend(await resendCode(customFormData));
      setSend(false);
    } else {
      const customFormData = {
        email: allUser?.data?.user?.email,
      };

      setSend(true);
      setResResend(await resendCode(customFormData));
      setSend(false);
    }
  };

  //! --------USE EFFECT QUE NOSC SIRVE CUANDO CAMBIA RES A LANZAR EL COMPROBADOR DE ERRORES
  useEffect(() => {
    console.log('😭', res);
    useCheckCodeError(res, setRes, setOkCheck, setOkDeleteUser, login, setUserNotFound);
  }, [res]);

  useEffect(() => {
    console.log('😃', resResend);
    useResendCodeError(resResend, setResResend, setUserNotFound);
  }, [resResend]);

  //! -------- PONEMOS LOS CONDICIONALES QUE EVALUAN SI ESTAN A TRUE LOS ESTADOS DE NAVEGACION (deleUser, okCheck)
  if (okCheck) {
    /// aqwui vamos a hacer  el autologin para cuando viene del register
    // para cuando viene del login lo gestionamos en el usecheckCodeError ---> modificamos el localstorage y el user del contexto
    if (!localStorage.getItem('user')) {
      useAutoLogin(allUser, login);
    } else {
      return <Navigate to="/dashboard" />;
    }
  }

  if (okDeleteUser) {
    // si borramos al useer por meter el codigo mal lo mandamos de nuevo a registrase
    logout();
    return <Navigate to="/register" />;
  }

  if (userNotFound) {
    /// lo mando al login porque aparece un 404 de user no found porque me ha recargado la pagina y se ha reseteado allUser
    // por lo cual no tengo acceso al email y no puedo reconocerlo en el back
    console.log('entrooo');
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="form-wrap-background">
        <div className="form-wrap">
          <h4>Verify your code 👌</h4>
          <h5>Write the code sent to your email</h5>
          <form onSubmit={handleSubmit(formSubmit)}>
            <input
              className="input_user_code"
              type="code"
              id="code"
              name="code"
              autoComplete="false"
              placeholder="Registration code"
              {...register('confirmationCode', { required: false })}
            />
            <div className="btn-container">
              <button className="button--blue" type="submit" disabled={send}>
                Verify Code
              </button>
              <button
                className="button--blue"
                type="submit"
                disabled={send}
                onClick={() => handleReSend()}
              >
                Resend Code
              </button>
            </div>
            <div>
              <p className="bottom_text">
                If the code is not correct, your user will be deleted from the database
                and you will have to register again.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
