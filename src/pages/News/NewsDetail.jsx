import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { NewsDetailCard } from '../../components/News/NewsDetailCard';
import { getById } from '../../services/news.service';

export const NewsDetail = () => {
  const { id } = useParams();
  const [fullNews, setFullNews] = useState();
  const fetchFullNews = async () => {
    setFullNews(await getById(id));
  };
  useEffect(() => {
    fetchFullNews();
  }, []);
  console.log(fullNews);
  return <div>{fullNews?.data && <NewsDetailCard news={fullNews.data} />}</div>;
};
