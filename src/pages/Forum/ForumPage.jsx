import './ForumPage.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { ForumFigure } from '../../components';
import { useAuth } from '../../context/authContext';
import { createComment } from '../../services';
import { getAll } from '../../services/forum.service';

export const ForumPage = () => {
  const navigate = useNavigate();

  const [forumList, setForumList] = useState();

  const fetchForums = async () => {
    setForumList(await getAll());
  };

  useEffect(() => {
    fetchForums();
  }, []);

  return (
    <div className="forumContainer">
      <h1 className="forumHeader">Welcome to our Forum!</h1>
      <div className="forumIntro">
        <h4>
          Feel free to talk about renewable energy and sustainability with a like-minded
          community. You can create a post or search for a topic of interest.
        </h4>
      </div>
      <div className="btn_container">
        <button className="button--blue" onClick={() => navigate('/forum')}>
          Create post
        </button>
      </div>
      <section>
        {forumList &&
          forumList.data.map((forum, index) => (
            <div key={index}>
              <ForumFigure forum={forum} />
            </div>
          ))}
      </section>
    </div>
  );
};
