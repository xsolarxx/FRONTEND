import './ForumPage.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { ForumFigure } from '../../components';
import { useAuth } from '../../context/authContext';
import { createComment } from '../../services';
import { getAll } from '../../services/forum.service';

export const ForumPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [forumList, setForumList] = useState();
  const [send, setSend] = useState(false);
  const [resComment, setResComment] = useState({});
  const [titleValue, setTitleValue] = useState(null);
  const [contentValue, setContentValue] = useState(null);

  const fetchForums = async () => {
    setForumList(await getAll());
  };

  const handleComment = async () => {
    const customFormData = {
      owner: user,
      title: titleValue,
      content: contentValue,
    };
    setSend(true);
    setResComment(await createComment(customFormData));
    setSend(false);
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
