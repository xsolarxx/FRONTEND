import './NewsCard.css';
import { useNavigate } from 'react-router-dom';

export const NewsCard = ({ news }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="page-container-news">
        <div className="containerNews">
          <h1 className="newsTitle">{news.title} </h1>
          <p className="newsShortContent"> {news.shortContent}</p>
          <img className="imgNews" src={news.image} alt={news.name} />
          <p className="newsAuthor">{news.author}</p>
          <p className="newsTags">{news.tags}</p>
          <button
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
