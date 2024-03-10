/* Noticia en la sección principal(columna). Aparece información breve y la 
opción de "Read More" para abrir el contenido entero de dicha noticia */

import { LikeNews } from '../LikeButtonCompany/LikeButtonNews';
import './NewsCard.css';

import { useNavigate } from 'react-router-dom';

export const NewsCard = ({ news }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="containerNews">
        <div className="section-news__image">
          <img className="imgNews" src={news.image} alt={news.name} />
        </div>
        <div className="section-news__text">
          <h4 className="newsTitle">{news.title} </h4>
          <p className="newsShortContent"> {news.shortContent}</p>
          <p className="newsAuthor">{news.author}</p>
          <p className="newsTags">{news.tags}</p>

          <button
            className="button--blue"
            onClick={() => {
              navigate(`/newsDetail/${news._id}`);
            }}
          >
            Read more
          </button>
        </div>
      </div>
    </>
  );
};
