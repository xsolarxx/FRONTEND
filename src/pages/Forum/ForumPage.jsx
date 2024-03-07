import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import './ForumPage.css';
import { ForumFigure } from '../../components';
import { getAll } from '../../services/forum.service';
import { useAuth } from '../../context/authContext';
import { createComment } from '../../services';

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
              <div className="addComment">
                <input
                  className="input_user"
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Comment title"
                  onChange={(e) => setTitleValue(e.target.value)}
                />
                <input
                  className="input_user"
                  type="text"
                  id="content"
                  name="content"
                  placeholder="comment content"
                  onChange={(e) => setContentValue(e.target.value)}
                />
                <button
                  className="btn"
                  type="submit"
                  disabled={send}
                  style={{ background: send ? '#5500c4' : '#631ebe' }}
                  onClick={() => handleComment()}
                >
                  Add comment
                </button>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};
