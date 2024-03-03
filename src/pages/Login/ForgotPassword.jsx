//*import './ForgotPassword.css';

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
      <div className="p-35">
        <h3>Reset your password</h3>

        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="form-group">
            <label htmlFor="input-email">
              Email
              <input
                className="input-email"
                type="text"
                id="email"
                name="email"
                autoComplete="false"
                {...register('email', { required: true })}
                placeholder="xsolarxcompany@gmail.com"
              />
            </label>
          </div>

          <div className="btn_container">
            <button
              className="button--gradient button--medium"
              type="submit"
              disabled={send}
              style={{ background: send ? '' : 'color-disabled-green' }}
            >
              Change password
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
