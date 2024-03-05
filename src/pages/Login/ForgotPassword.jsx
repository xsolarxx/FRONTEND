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
      <div className="pswcontainer">
        <div className="resend p-35 gap-15">
          <h5>Reset your password</h5>

          <form className="formpsw" onSubmit={handleSubmit(formSubmit)}>
            <div className="form-group">
              <label htmlFor="input-email">
                <input
                  className="email_fgpsw"
                  type="text"
                  id="email"
                  name="email"
                  autoComplete="false"
                  {...register('email', { required: true })}
                  placeholder="Email"
                />
              </label>
            </div>

            <div className="btn_container11">
              <button className="button-fgpw" type="submit" disabled={send}>
                Change password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
