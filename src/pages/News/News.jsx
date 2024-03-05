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
  //*antes de hacer el mapeo tenemos que ver si la longitd de la mapa es mayor que 0
  //* si no se va a rompero elmapeo , si es mayor que 0 pintamos las compañias
  //* Si es menor que 0 --> sin compañias que mostrar

  //* Verifica sí la lista tienes los itens para mapear

  return (
    <>
      {newsList &&
        newsList.data.map((news, index) => (
          <NewsCard news={news} key={index} />
        ))}
    </>
  );
};