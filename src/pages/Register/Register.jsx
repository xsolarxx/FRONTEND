import './Register.css';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { Uploadfile } from '../../components/UploadFile/Uploadfile';
import { useAuth } from '../../context/authContext';
import { useRegisterError } from '../../hooks/useRegisterError';
import { registerWithRedirect } from '../../services/user.service';

export const Register = () => {
  // allUser es la respuesta completa del 200 del service de registro
  const navigate = useNavigate();
  const { allUser, setAllUser, bridgeData, setDeleteUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [okRegister, setOkRegister] = useState(false);

  //------------------------------* Función para el formulario *-------------------------------------------------------------

  const formSubmit = async (formData) => {
    const inputFile = document.getElementById('file-upload').files;

    if (inputFile.length != 0) {
      // Si no es 0 --> Hay una imagen
      const custonFormData = {
        ...formData,
        image: inputFile[0],
      };

      setSend(true);
      setRes(await registerWithRedirect(custonFormData));
      setSend(false);
    } else {
      setSend(true);
      setRes(await registerWithRedirect(formData));
      setSend(false);
    }
  };

  //------------------------------* Parte 2: Función para el formulario *-------------------------------------------------------------
  // AllUser: Los usuarios que vienen del register
  // User: Los usuarios que vienen del login

  useEffect(() => {
    console.log(res);
    useRegisterError(res, setOkRegister, setRes);
    if (res?.status == 200) bridgeData('ALLUSER');
  }, [res]);

  useEffect(() => {
    console.log('😍', allUser);
  }, [allUser]);

  useEffect(() => {
    setDeleteUser(() => false);
  }, []);

  //------------------------------* Estados de navegación *-------------------------------------------------------------
  if (okRegister) {
    return <Navigate to="/verifyCode" />;
  }

  return (
  <>
    <div className="main_container">
      <div className="form-wrap1 p-35">
        <h4 className="logintext">xSolarx</h4>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <label htmlFor="input_user" className="userregister">
              <input
                className="input_user"
                type="text"
                id="userName"
                name="userName"
                autoComplete="false"
                {...register('userName', { required: true })}
                placeholder="Username"
              />
            </label>
          </div>

          <div className="password_container form-group">
            <label htmlFor="input_password">
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
          </div>

          <div className="email_container form-group">
            <label htmlFor="input_email">
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

            <div className="gender">
              <input
                type="radio"
                name="gender"
                id="Hombre"
                value="Hombre"
                {...register('gender')}
              />
              <label htmlFor="Hombre" className="label-radio hombre">
                <h6>Hombre</h6>
              </label>
              <input
                type="radio"
                name="gender"
                id="Mujer"
                value="Mujer"
                {...register('gender')}
              />
              <label htmlFor="Mujer" className="label-radio mujer">
                <h6>Mujer</h6>
              </label>
            </div>
            <Uploadfile />
          </div>

          <div className="btn_container">
            <button
              className="button--blue"
              type="submit"
              disabled={send}
            >
              Register
            </button>
          </div>
        </form>
        <div className="footerForm">
          <p className="bottom-text p-xs">
            By clicking the Sign Up button, you agree to our{' '}
            <Link className="linkr1">Terms & Conditions</Link> and{' '}
            <Link className="linkr1">Privacy Policy</Link>.
          </p>
          <p className=" p-xs">
            Already have an account? <Link className="linkr1" to="/login">Login Here</Link>
          </p>
        </div>
      </div>
    </div>
  </>
  );
};
