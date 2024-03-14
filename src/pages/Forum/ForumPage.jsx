import './ForumPage.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { ForumFigure } from '../../components';
import { useAuth } from '../../context/authContext';
import { createComment } from '../../services';
import { getAll } from '../../services/forum.service';
import { LikeForum } from '../../components/LikeButtonCompany/LikeButtonForum';
import { TopBar } from '../../layouts/TopBar';

export const ForumPage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [forumList, setForumList] = useState();

  const fetchForums = async () => {
    setForumList(await getAll());
  };

  useEffect(() => {
    fetchForums();
  }, []);

  return (
    <>
      <TopBar pageTitle="Welcome to our Forum!"></TopBar>
      <div className="forumContainer">
        <div className="forumIntro">
          <h4>
            Feel free to talk about renewable energy and sustainability with a like-minded
            community. You can create a post or search for a topic of interest.
          </h4>
          <div className="Start-a-post">
            <img className="icon" src={user.image} alt={user.user} />
            <input placeholder="Start a post" onClick={() => navigate('/forum')}></input>
            {/* <button className="button--blue" onClick={() => navigate('/forum')}> */}
            {/* </button> */}
          </div>
        </div>

        <section className="Forum-Page-grid">
          {forumList &&
            forumList.data.map((forum, index) => (
              <div key={index}>
                <ForumFigure forum={forum} />
              </div>
            ))}
        </section>
      </div>
    </>
  );
};
