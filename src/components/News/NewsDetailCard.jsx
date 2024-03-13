/* Noticia en grande con todo el contenido, inclusive el texto entero. Se llega aquí 
a través de hacer click en "Read More" */
import './NewsDetailCard.css';
import { LikeNews } from '../../components/LikeButtonCompany/LikeButtonNews';
export const NewsDetailCard = ({ newsData }) => {
  return (
    <>
      <div className="pageContainerNewsDetailed">
        <h1 className="newsTitleDetailed">{newsData.title} </h1>

        <img src={newsData.image} alt={newsData.name} />

        <p> {newsData.fullContent}</p>

        <label className="newsAuthorDetailed">By: {newsData.author}</label>
        <label className="newsTagsDetailed">Tag: {newsData.tags}</label>

        <LikeNews id={newsData?._id} />
      </div>
    </>
  );
};
