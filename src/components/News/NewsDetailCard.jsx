/* Noticia en grande con todo el contenido, inclusive el texto entero. Se llega aquí 
a través de hacer click en "Read More" */
import './NewsDetailCard.css';

import { LikeNews } from '../../components/LikeButtonCompany/LikeButtonNews';
export const NewsDetailCard = ({ newsData }) => {
  return (
    <>
      <div className="pageContainerNewsDetailed">
        <h1>{newsData.title} </h1>
        <p id="newsShortContent"> {newsData.shortContent}</p>
        <img src={newsData.image} alt={newsData.name} />
        <p dangerouslySetInnerHTML={{ __html: newsData.fullContent }} />
        <div id="authorAndTag">
          <label className="newsAuthor">By: {newsData.author}</label>
          <label className="newsTags">Tag: {newsData.tags}</label>
        </div>
        <LikeNews id={newsData?._id} />
      </div>
    </>
  );
};
