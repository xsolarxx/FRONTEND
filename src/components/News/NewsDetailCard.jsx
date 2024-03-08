/* Noticia con todo el contenido, inclusive el texto entero. Se llega aquí 
a través de hacer click en "Read More" */
import './NewsCard.css';

export const NewsDetailCard = ({ newsData }) => {
  return (
    <>
      <div className="pageContainerNews">
        <div className="containerNews">
          <h1 className="newsTitle">{newsData.title} </h1>
          <p className="newsShortContent"> {newsData.shortContent}</p>
          <p className="newsFullContent"> {newsData.fullContent}</p>
          <img className="imgNews" src={newsData.image} alt={newsData.name} />
          <p className="newsAuthor">{newsData.author}</p>
          <p className="newsTags">{newsData.tags}</p>
        </div>
      </div>
    </>
  );
};
