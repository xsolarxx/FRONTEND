import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

export const LikeButton = () => {
  const [liked, setLiked] = useState(false); // Estado para controlar se foi curtido ou não

  const handleLike = () => {
    setLiked(!liked); // Alterna o estado de curtido
  };

  return (
    <div>
      {/* Botão de curtida */}
      <button onClick={handleLike}>
        {/* Ícone dependendo do estado de curtido */}
        <FontAwesomeIcon icon={liked ? solidHeart : regularHeart} />
        {/* Texto dependendo do estado de curtido */}
        {liked}
      </button>
    </div>
  );
};
