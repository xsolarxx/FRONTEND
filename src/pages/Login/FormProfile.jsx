import './FormProfile.css';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

import { FigureUser, Uploadfile } from '../../components';
import { useAuth } from '../../context/authContext';
import { useUpdateError } from '../../hooks';
import { update } from '../../services/user.service';
import { NavProfile } from '../../components/NavProfile/NavProfile';
export const FormProfile = () => {
  const { user, setUser, logout } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);

  const defaultData = {
    userName: user?.user,
  };

  //! ------------ 1) La funcion que gestiona el formulario----
  const formSubmit = (formData) => {
    Swal.fire({
      title: 'Are you sure you want to change your data profile?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(73, 193, 162)',
      cancelButtonColor: '#d33',
      confirmButtonText: 'YES',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const inputFile = document.getElementById('file-upload').files;

        if (inputFile.length != 0) {
          const custonFormData = {
            ...formData,
            image: inputFile[0],
          };

          setSend(true);
          setRes(await update(custonFormData));
          setSend(false);
        } else {
          const custonFormData = {
            ...formData,
          };
          setSend(true);
          setRes(await update(custonFormData));
          setSend(false);
        }
      }
    });
  };

  //! -------------- 2 ) useEffect que gestiona la parte de la respuesta ------- customHook

  useEffect(() => {
    console.log(res);
    useUpdateError(res, setRes, setUser, logout);
  }, [res]);

  return (
    <>
      <div className="div-user-profile-setting">
        <div className="div-user-profile-setting-card">
          <figure className="dataProfile">
            <h4>UPDATE PROFILE</h4>
            <h4>{user.name}</h4>
            <div className="profile-photo-outer">
              <img className="profile-photo" src={user.image} alt="foto User" />
            </div>
          </figure>
          <NavProfile />
          <form onSubmit={handleSubmit(formSubmit)}>
            <label htmlFor="custom-input" className="custom-placeholder">
              change username
            </label>
            <input
              className="input_user"
              type="text"
              id="userName"
              name="userName"
              autoComplete="false"
              defaultValue={defaultData?.name}
              {...register('userName')}
            />
            change profile photo
          </form>
          <Uploadfile />
          <button className="button--green" type="submit" disabled={send}>
            Update
          </button>
        </div>
      </div>
    </>
  );
};
