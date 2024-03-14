/* Noticia en la sección principal(columna). Aparece información breve y la 
opción de "Read More" para abrir el contenido entero de dicha noticia */

import { useAuth } from '../../context/authContext';
import './NewsCard.css';

import { useNavigate } from 'react-router-dom';

export const NewsCard = ({ news }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  return (
    <div className="containerNews">
      <section className="newsImageContainer">
        <img className="newsImage" src={news.image} alt={news.name} />
      </section>
      <div className="newsText">
        <h4 className="newsTitle">{news.title} </h4>
        <p className="newsShortContent"> {news.shortContent}</p>
        <div className="authorAndTag">
          <label className="newsAuthor">By: {news.author}</label>
          <label className="newsTags">Tag: {news.tags}</label>
        </div>
        <button
          className="button--blue"
          onClick={() => {
            user ? navigate(`/newsDetail/${news._id}`) : navigate(`/register`);
          }}
        >
          {user ? 'Read more' : 'Register to read more'}
        </button>
      </div>
    </div>
  );
};
