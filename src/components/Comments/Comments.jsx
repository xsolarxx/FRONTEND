import React from 'react';

export const Comments = ({ comment }) => {
  const creationDate = new Date(comment.createdAt);
  const formattedDate = creationDate.toLocaleString('es-ES', {
    timeZone: 'Europe/Madrid',
  });

  return (
    <>
      <div className="commentOwnerContainer">
        <h5>{comment.owner.userName}</h5>
        <p>{formattedDate}</p>
        <p>{comment.title}</p>
        <p>{comment.content}</p>
      </div>
    </>
  );
};
