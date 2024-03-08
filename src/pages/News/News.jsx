import './News.css';

import { useEffect, useState } from 'react';

import { NewsCard } from '../../components';
import { getAll } from '../../services/news.service';

export const NewsPage = () => {
  const [newsList, setNewsList] = useState();
  const fetchNews = async () => {
    setNewsList(await getAll());
  };
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <section className="NewsPageGrid">
      {newsList &&
        newsList.data.map((news, index) => <NewsCard news={news} key={index} />)}
    </section>
  );
};
