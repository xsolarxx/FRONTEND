import './Forum.css';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router';

import { Uploadfile } from '../../components';
import { useAuth } from '../../context/authContext';
import { useForumError } from '../../hooks';
import { createForum } from '../../services';
import {
  LikeCompany,
  LikeForum,
} from '../../components/LikeButtonCompany/LikeButtonForum';

//Para crear la publicación(foro)

export const Forum = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [okForum, setOkForum] = useState(false);

  //función que se encarga del formulario

  const formSubmit = async (formData) => {
    const inputFile = document.getElementById('file-upload').files;

    if (inputFile.length != 0) {
      const customFormdata = {
        ...formData,
        image: inputFile[0],
        owner: user,
      };

      setSend(true);
      setRes(await createForum(customFormdata));
      setSend(false);
    } else {
      const customFormdata = {
        ...formData,
        owner: user,
      };

      setSend(true);
      setRes(await createForum(customFormdata));
      setSend(false);
    }
  };

  // useEffect / custom hook. Manejo de respuestas

  useEffect(() => {
    useForumError(res, setRes, setOkForum);
  }, [res]);

  // estados de navegación

  if (okForum) {
    return <Navigate to="/forumPage" />;
  }

  return (
    <>
      <div className="forum_container">
        <form className="formForum" onSubmit={handleSubmit(formSubmit)}>
          <h4>Let´s get rolling!</h4>
          <h5>
            What subject would you like to approach?<br></br>
            You can{' '}
            <span
              style={{
                textDecoration: 'underline',
                textDecorationColor: '#97f85b',
                textDecorationThickness: '3px',
              }}
            >
              create your own forum
            </span>{' '}
            below:
          </h5>

          <input
            className="input_title"
            type="text"
            id="title"
            name="title"
            autoComplete="false"
            {...register('title', { required: true })}
            placeholder="Name for your new forum"
          />
          <textarea
            className="input_content"
            type="text"
            id="content"
            name="content"
            autoComplete="false"
            {...register('content', { required: true })}
            placeholder="Your new forum´s description goes here"
          />

          <Uploadfile />

          <div className="btn_container">
            <button className="button--blue" type="submit" disabled={send}>
              Create forum
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
