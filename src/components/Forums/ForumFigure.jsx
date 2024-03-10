import { useNavigate } from 'react-router';
import { LikeForum } from '../LikeButtonCompany/LikeButtonForum';

export const ForumFigure = ({ forum }) => {
  const navigate = useNavigate();
  const creationDate = new Date(forum.createdAt);
  const formattedDate = creationDate.toLocaleString('es-ES', {
    timeZone: 'Europe/Madrid',
  });

  return (
    <div className="containerForum">
      <div className="containerForumOwner">
        <img
          className="imgOwnerForum"
          src={forum.owner.image}
          alt={forum.owner.userName}
        />
        <h6 className="nameOwnerForum">{forum.owner.userName}</h6>
      </div>
      <div className="containerForumInfo">
        <h3 className="forumTitle">{forum.title}</h3>
        <p className="forumCreation">{formattedDate}</p>
        <div className="btn_container">
          <LikeForum id={forum._id} />
          <button
            className="button--blue"
            onClick={() => {
              navigate(`/forumDetail/${forum._id}`);
            }}
          >
            Enter forum
          </button>
        </div>
      </div>
    </div>
  );
};
