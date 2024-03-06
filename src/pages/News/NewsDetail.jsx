import { useEffect, useState } from 'react';

import { NewsDetailCard } from '../../components';
import { getbyid } from '../../services/news.service';

export const NewsPage = () => {
  const [newsList, setNewsList] = useState();
  const fetchNews = async () => {
    setNewsList(await getbyid());
  };
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <>
      {newsList &&
        newsList.data.map((news, index) => <NewsDetailCard news={news} key={index} />)}
    </>
  );
};
