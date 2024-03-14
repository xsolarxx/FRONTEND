import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getByIdPopulate } from '../../services/user.service';
import { ProfileDetailCard } from '../../components/Cards/ProfileDetailCard';
import { CompanyDas } from '../Dashboard/CompanyDas';
import { ForumDas } from '../Dashboard/ForumDas';
import FollowDas from '../Dashboard/FollowDas';
import CommentDas from '../Dashboard/CommentDas';
import { NewsDash } from '../Dashboard/NewsDash';

export const ProfileDetail = () => {
  const { id } = useParams();
  const [randomUser, setRandomUser] = useState();
  const [companyDas, setCompanyDas] = useState(false);
  const [followDas, setFollowDas] = useState(false);
  const [newsDas, setNewsDas] = useState(false);
  const [commentDas, setCommentDas] = useState(false);
  const [forumDas, setForumDas] = useState(true);

  const getRandomUser = async () => {
    const user = await getByIdPopulate(id);
    setRandomUser(user);
  };

  useEffect(() => {
    getRandomUser();
  }, [id]);

  console.log('este es el random', randomUser);

  return (
    <div className="dashboard-conatiner">
      {randomUser?.data && <ProfileDetailCard profileData={randomUser?.data} />}
      <div className="user-main-pannel">
        <div className="otraCaja">
          <button
            className={`button--green ${companyDas ? 'btn-active' : ''}`}
            onClick={() => {
              setCompanyDas(true);
              setFollowDas(false);
              setCommentDas(false);
              setForumDas(false);
              setNewsDas(false);
            }}
          >
            Companies
          </button>
          <button
            className={`button--green ${followDas ? 'btn-active' : ''}`}
            onClick={() => {
              setCompanyDas(false);
              setFollowDas(true);
              setCommentDas(false);
              setForumDas(false);
              setNewsDas(false);
            }}
          >
            Network
          </button>
          <button
            className={`button--green ${newsDas ? 'btn-active' : ''}`}
            onClick={() => {
              setCompanyDas(false);
              setFollowDas(false);
              setCommentDas(false);
              setForumDas(false);
              setNewsDas(true);
            }}
          >
            News
          </button>
          <button
            className={`button--green ${commentDas ? 'btn-active' : ''}`}
            onClick={() => {
              setCompanyDas(false);
              setFollowDas(false);
              setCommentDas(true);
              setForumDas(false);
              setNewsDas(false);
            }}
          >
            Comments
          </button>
          <button
            className={`button--green ${forumDas ? 'btn-active' : ''}`}
            onClick={() => {
              setCompanyDas(false);
              setFollowDas(false);
              setCommentDas(false);
              setForumDas(true);
              setNewsDas(false);
            }}
          >
            Forums
          </button>
        </div>
        {companyDas && <CompanyDas userDashboard={randomUser?.data} />}

        {forumDas && <ForumDas userDashboard={randomUser?.data} />}

        {followDas && <FollowDas userDashboard={randomUser?.data} />}

        {commentDas && <CommentDas userDashboard={randomUser?.data} />}
        {newsDas && <NewsDash userDashboard={randomUser?.data} />}
      </div>
    </div>
  );
};
