import { Link } from 'react-router-dom';
import './Comments.css';
import React from 'react';

export const Comments = ({ comment }) => {
  const creationDate = new Date(comment?.createdAt);
  const formattedDate = creationDate.toLocaleString('es-ES', {
    timeZone: 'Europe/Madrid',
  });

  return (
    <>
      <div className="commentOwnerContainer">
        <Link to={`/profileDetail/${comment?.owner?._id}`}>
          <h5>{comment?.owner?.userName}</h5>
        </Link>
        <p>{formattedDate}</p>
        <p>{comment?.title}</p>
        <p>{comment?.content}</p>
      </div>
    </>
  );
};
