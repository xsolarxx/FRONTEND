import './ForgotPassword.css';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

import { useForgotPasswordError } from '../../hooks';
import { changePassword } from '../../services/user.service';

export const ForgotPassword = () => {
  const { handleSubmit, register } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [forgotOk, setForgotOk] = useState(false);
  //! 1)-------------------- LA FUNCIOON QUE SE ENCARGA DE GESTIONAR LOS DATOS DEL FORMULARIO

  const formSubmit = async (formData) => {
    setSend(true);
    setRes(await changePassword(formData));
    setSend(false);
  };
  //! 2) ----------------USEEFFECT QUE GESTIONA LA RES CON SUS ERRORES Y SUS 200
  useEffect(() => {
    useForgotPasswordError(res, setRes, setForgotOk);
  }, [res]);

  //! 3) ---------------- ESTADOS DE NAVEGACION O QUE LA fiuncion ESTA ok
  if (forgotOk) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <div className="reset_password">
        <div className="reset">
          <h4>Reset your password</h4>
          <h5>Please provide your email in order to receive your password</h5>
          <form onSubmit={handleSubmit(formSubmit)}>
            <input
              className="email_forgot_password"
              type="email"
              id="email"
              name="email"
              autoComplete="false"
              placeholder="Email"
              {...register('email', { required: true })}
            />
            <button className="button--blue" type="submit" disabled={send}>
              Change password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
