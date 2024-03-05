import './NewsCard.css';

export const NewsCard = ({ news }) => {
  return (
    <>
      <div className="page-container-news">
        <div className="containerNews">
          <h1 className="newsTitle">{news.title} </h1>
          <p className="newsShortContent"> {news.shortContent}</p>
          <img className="imgNews" src={news.image} alt={news.name} />
          <p className="newsAuthor">{news.author}</p>
          <p className="newsTags">{news.tags}</p>
        </div>
      </div>
    </>
  );
};
