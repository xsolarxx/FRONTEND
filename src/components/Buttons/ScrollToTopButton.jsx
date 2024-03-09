import './ScrollToTopButton.css'; // Estilos CSS para o botão

import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; // Importe o ícone de seta para cima do Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const ScrollToTopButton = () => {
  // Função para rolar a página para o topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FontAwesomeIcon
      icon={faArrowUp}
      className="scrollToTopButton"
      onClick={scrollToTop}
    />
  );
};
