import { Link } from 'react-router-dom';
import './ForumFigureDetail.css';
import { TopBar } from '../../layouts/TopBar';
import { LikeForum } from '../LikeButtonCompany/LikeButtonForum';
import { FollowForumButton } from '../FollowButton/FollowForumButton';

export const ForumFigureDetail = ({ forumData }) => {
  const creationDate = new Date(forumData.createdAt);
  const formattedDate = creationDate.toLocaleString('es-ES', {
    timeZone: 'Europe/Madrid',
  });

  return (
    <>
      <div className="ForumFigureDetail-Container">
        <h1>{forumData.title}</h1>
        <img src={forumData.image} alt={forumData.title} />

        <Link to={`/profileDetail/${forumData?.owner?._id}`}>
          <img
            className="imgOwnerForum"
            src={forumData.owner.image}
            alt={forumData.owner.userName}
          />
          <h6>{forumData.owner.userName}</h6>
        </Link>

        <p>{formattedDate}</p>
        <p dangerouslySetInnerHTML={{ __html: forumData.content }} />
        <LikeForum id={forumData?._id} />
        <FollowForumButton id={forumData?._id} />
      </div>
    </>
  );
};
