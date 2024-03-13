import './Dashboard.css';

import { useEffect, useState } from 'react';

import { useAuth } from '../../context/authContext';
import { getByIdPopulate } from '../../services/user.service';
import { SidePanel } from './SidePanel';
import { CompanyDas } from './CompanyDas';
import { NewsDash } from './NewsDash';
import { ForumDas } from './ForumDas';
import FollowDas from './FollowDas';
import CommentDas from './CommentDas';

export const Dashboard = () => {
  const { user } = useAuth();
  const [userDashboard, setUserDashboard] = useState(null);
  const [companyDas, setCompanyDas] = useState(false);
  const [followDas, setFollowDas] = useState(false);
  const [newsDas, setNewsDas] = useState(false);
  const [commentDas, setCommentDas] = useState(false);
  const [forumDas, setForumDas] = useState(true);

  const fetchUserData = async () => {
    const res = await getByIdPopulate(user?._id);
    setUserDashboard(res.data);
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="dashboard-conatiner">
      <SidePanel />
      <div className="user-main-pannel">
        <div className="otraCaja">
          <button
            className="button--green"
            onClick={() => {
              setCompanyDas(true);
              setFollowDas(false);
              setCommentDas(false);
              setForumDas(false);
              setNewsDas(false);
            }}
          >
            view Company
          </button>
          <button
            className="button--green"
            onClick={() => {
              setCompanyDas(false);
              setFollowDas(true);
              setCommentDas(false);
              setForumDas(false);
              setNewsDas(false);
            }}
          >
            view Network
          </button>
          <button
            className="button--green"
            onClick={() => {
              setCompanyDas(false);
              setFollowDas(false);
              setCommentDas(false);
              setForumDas(false);
              setNewsDas(true);
            }}
          >
            view News
          </button>
          <button
            className="button--green"
            onClick={() => {
              setCompanyDas(false);
              setFollowDas(false);
              setCommentDas(true);
              setForumDas(false);
              setNewsDas(false);
            }}
          >
            view Comments
          </button>
          <button
            className="button--green"
            onClick={() => {
              setCompanyDas(false);
              setFollowDas(false);
              setCommentDas(false);
              setForumDas(true);
              setNewsDas(false);
            }}
          >
            view Forums
          </button>
        </div>
        {companyDas && <CompanyDas userDashboard={userDashboard} />}

        {forumDas && <ForumDas userDashboard={userDashboard} />}

        {followDas && <FollowDas userDashboard={userDashboard} />}

        {commentDas && <CommentDas userDashboard={userDashboard} />}

        {newsDas && <NewsDash userDashboard={userDashboard} />}
      </div>
    </div>
  );
};
