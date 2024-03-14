import './NewsCreator.css';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router';

import { Uploadfile } from '../../components';
import { useAuth } from '../../context/authContext';
import { useCreateNewsError } from '../../hooks';
import { createNews } from '../../services';

export const News = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [okNews, setOkNews] = useState(false);

  //función que se encarga del formulario

  const formSubmit = async (formData) => {
    const inputFile = document.getElementById('file-upload').files;
    console.log('formData', formData);
    if (inputFile.length != 0) {
      const customFormdata = {
        ...formData,
        image: inputFile[0],
        owner: user,
      };

      setSend(true);
      setRes(await createNews(customFormdata));
      setSend(false);
    } else {
      const customFormdata = {
        ...formData,
        owner: user,
      };

      setSend(true);
      setRes(await createNews(customFormdata));
      setSend(false);
    }
  };

  // useEffect / custom hook. Manejo de respuestas

  useEffect(() => {
    useCreateNewsError(res, setRes, setOkNews);
  }, [res]);

  // estados de navegación

  if (okNews) {
    return <Navigate to="/News" />;
  }

  return (
    <>
      <div className="news_container">
        <form className="formNews email_container1" onSubmit={handleSubmit(formSubmit)}>
          <h4>News Builder</h4>
          <input
            className="input_title"
            type="text"
            id="title"
            name="title"
            autoComplete="false"
            {...register('title', { required: true })}
            placeholder="News Title"
          />
          <textarea
            className="input_content"
            type="text"
            id="shortContent"
            name="shortContent"
            maxLength={120}
            autoComplete="false"
            {...register('shortContent', { required: true })}
            placeholder="Short intro for your article. Max 120 chars"
          />
          <textarea
            className="input_content"
            type="text"
            id="fullContent"
            name="fullContent"
            autoComplete="false"
            {...register('fullContent', { required: true })}
            placeholder="Your article´s full body."
          />
          <input
            className="input_title"
            type="text"
            id="author"
            name="author"
            autoComplete="false"
            {...register('author', { required: true })}
            placeholder="News author"
          />
          <h5>Choose a category for your article:</h5>
          <div className="newsTag_container">
            <input
              type="checkbox"
              name="tags"
              id="tags"
              value="Solar panels"
              {...register('tags')}
            />
            <label htmlFor="Solar panels" className="label-checkbox Solar panels">
              Solar panels
            </label>
          </div>
          <div className="newsTag_container">
            <input
              type="checkbox"
              name="tags"
              id="Wind power"
              value="Wind power"
              {...register('tags')}
            />
            <label htmlFor="Wind power" className="label-checkbox Wind power">
              Wind power
            </label>
          </div>
          <div className="newsTag_container">
            <input
              type="checkbox"
              name="tags"
              id="Others"
              value="Others"
              {...register('tags')}
            />
            <label htmlFor="Others" className="label-checkbox Others">
              Others
            </label>
          </div>
          <Uploadfile />

          <div className="btn_container">
            <button
              className="button--blue"
              type="submit"
              disabled={send}
              style={{ background: send ? '' : 'color-disabled-green' }}
            >
              Create Article
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
