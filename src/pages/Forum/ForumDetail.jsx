import { useParams } from 'react-router';
import { getById } from '../../services/forum.service';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/authContext';
import { ForumFigureDetail } from '../../components';
import { createComment } from '../../services/comment.service';

export const ForumDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [fullForum, setFullForum] = useState();
  const [send, setSend] = useState(false);
  const [resComment, setResComment] = useState({});
  const [titleValue, setTitleValue] = useState(null);
  const [contentValue, setContentValue] = useState(null);

  const fetchFullForum = async () => {
    setFullForum(await getById(id));
  };

  const handleComment = async () => {
    const customFormData = {
      owner: user,
      title: titleValue,
      content: contentValue,
      idRecipient: id,
    };
    setSend(true);
    setResComment(await createComment(id, customFormData));
    setSend(false);
  };

  useEffect(() => {
    fetchFullForum();
  }, []);
  console.log(fullForum);
  return (
    <>
      <div>{fullForum?.data && <ForumFigureDetail forumData={fullForum.data} />}</div>
      <section className="commentSection">
        <h6>Leave a comment</h6>
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
      </section>
    </>
  );
};
