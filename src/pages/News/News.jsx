import './News.css';
import { useEffect, useState } from 'react';
import { NewsCard } from '../../components';
import { getAll } from '../../services/news.service';

export const NewsPage = () => {
  const [newsList, setNewsList] = useState();
  const [selectedTag, setSelectedTag] = useState(''); // Estado para almacenar la etiqueta seleccionada

  const fetchNews = async () => {
    setNewsList(await getAll());
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleTagFilter = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <>
      <section className="NewsPageGrid">
        <div className="tagsfilter">
          <button className="button--blue" onClick={() => handleTagFilter('')}>
            No filter
          </button>
          <button
            className="button--blue"
            onClick={() => handleTagFilter('Solar panels')}
          >
            Solar Panels
          </button>
          <button className="button--blue" onClick={() => handleTagFilter('Wind power')}>
            Wind power
          </button>
          <button className="button--blue" onClick={() => handleTagFilter('Others')}>
            Others
          </button>
        </div>
        {newsList &&
          newsList.data
            .filter((news) => {
              return selectedTag === '' || news.tags.includes(selectedTag);
            })
            .map((news, index) => <NewsCard news={news} key={index} />)}
      </section>
    </>
  );
};
