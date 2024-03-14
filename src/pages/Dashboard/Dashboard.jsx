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
  const [isAdmin, setIsAdmin] = useState(false);

  const fetchUserData = async () => {
    const res = await getByIdPopulate(user?._id);
    setUserDashboard(res.data);
    setIsAdmin(res.data && res.data.rol === 'admin');
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="dashboard-conatiner">
      <SidePanel />
      <div className="user-main-panel">
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
          {isAdmin && (
            <>
              <button
                className="button--blue"
                onClick={() => {
                  window.location.href = 'http://localhost:5173/createnews';
                }}
              >
                Create News
              </button>
              <button
                className="button--blue"
                onClick={() => {
                  window.location.href = 'http://localhost:5173/createcompany';
                }}
              >
                Create Company
              </button>
            </>
          )}
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
