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
          <div className="commentOwnerContainer_profile">
            <h5>{comment?.owner?.userName}</h5>

            <img
              className="icon"
              src={comment?.owner?.image}
              alt={comment?.owner?.userName}
            />
            <p>{formattedDate}</p>
          </div>
        </Link>
        <div className="commentOwnerText">
          <p>{comment?.title}</p>
          <p>{comment?.content}</p>
        </div>
      </div>
    </>
  );
};
