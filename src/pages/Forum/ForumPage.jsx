import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import './ForumPage.css';
import { ForumFigure } from '../../components';
import { getAll } from '../../services/forum.service';
import { useAuth } from '../../context/authContext';
import { createComment } from '../../services';

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
      <div className="forumsHeader">
        <h4>Renewable forums</h4>
        <p>
          Time to talk about renewable energies. Create your own forum or search for a
          topic of interest and contribute.
        </p>
      </div>
      <button className="createForumButton" onClick={() => navigate('/forum')}>
        Create your own forum
      </button>
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
