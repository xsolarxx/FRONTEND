import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/authContext';
import { useEffect, useState } from 'react';
import { createForum } from '../../services';
import { useForumError } from '../../hooks';
import { Uploadfile } from '../../components';

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

  return (
    <>
      <div className="form-wrap">
        <h4>Start a change</h4>
        <p>Start a forum on renewable energies</p>
      </div>

      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="user_container form-group">
          <input
            className="input_user"
            type="text"
            id="title"
            name="title"
            autoComplete="false"
            {...register('title', { required: true })}
          />
          <label htmlFor="custom-input" className="custom-placeholder">
            Title
          </label>
        </div>

        <div className="user_container form-group">
          <input
            className="input_user"
            type="text"
            id="content"
            name="content"
            autoComplete="false"
            {...register('content', { required: true })}
          />
          <label htmlFor="custom-input" className="custom-placeholder">
            Content
          </label>
        </div>

        <Uploadfile />

        <div className="btn_container">
          <button
            className="btn"
            type="submit"
            disabled={send}
            style={{ background: send ? '#5500c4' : '#631ebe' }}
          >
            Create forum
          </button>
        </div>
      </form>
    </>
  );
};
