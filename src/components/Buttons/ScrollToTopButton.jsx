import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; // Importe o ícone de seta para cima do Font Awesome
import './ScrollToTopButton.css'; // Estilos CSS para o botão

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
