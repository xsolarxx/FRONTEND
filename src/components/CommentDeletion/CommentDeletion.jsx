import React from 'react';

export const CommentDeletion = ({ onDelete }) => {
  const handleDelete = () => {
    const confirmDeletion = window.confirm(
      'Tem certeza de que deseja excluir este comentário?',
    );
    if (confirmDeletion) {
      onDelete();
    }
  };

  return <button onClick={handleDelete}>Excluir Comentário</button>;
};
