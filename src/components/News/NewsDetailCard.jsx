/* Noticia en grande con todo el contenido, inclusive el texto entero. Se llega aquí 
a través de hacer click en "Read More" */
import './NewsDetailCard.css';

export const NewsDetailCard = ({ newsData }) => {
  return (
    <div className="pageContainerNewsDetailed">
      <div className="containerNewsDetailed">
        <h2 className="newsTitleDetailed">{newsData.title} </h2>
        <section className="newsShortContentDetailed">
          <p> {newsData.shortContent}</p>
        </section>
        <section className="newsImageDetailed">
          <img className="imgNewsDetailed" src={newsData.image} alt={newsData.name} />
        </section>
        <p className="newsFullContentDetailed"> {newsData.fullContent}</p>
        <div className="authorAndTags">
          <label className="newsAuthorDetailed">By: {newsData.author}</label>
          <label className="newsTagsDetailed">Tag: {newsData.tags}</label>
        </div>
      </div>
    </div>
  );
};
