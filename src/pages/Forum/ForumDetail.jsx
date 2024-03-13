import './ForumDetail.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { CommentDeletion, Comments, ForumFigureDetail } from '../../components';
import { useAuth } from '../../context/authContext';
import { useCommentError } from '../../hooks';
import { createComment, getByRecipient } from '../../services/comment.service';
import { getById } from '../../services/forum.service';
import { toggleFavComments } from '../../services/user.service';

export const ForumDetail = () => {
  const { id } = useParams();
  const { user, setUser } = useAuth();
  console.log('entro forum likes', user);
  const [fullForum, setFullForum] = useState();
  const [send, setSend] = useState(false);
  const [resComment, setResComment] = useState({});
  const [titleValue, setTitleValue] = useState('');
  const [contentValue, setContentValue] = useState('');
  const [comments, setComments] = useState([]);
  const [updateComments, setUpdateComments] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const fetchFullForum = async () => {
    setFullForum(await getById(id));
  };

  const handleComment = async () => {
    const customFormData = {
      owner: user,
      title: titleValue,
      content: contentValue,
    };
    setSend(true);
    setResComment(await createComment(id, customFormData));
    setTitleValue('');
    setContentValue('');
    setSend(false);
  };

  const getComments = async () => {
    setComments(await getByRecipient('Forum', id));
  };

  const handleLikeComment = async (commentId) => {
    try {
      const isLiked = user.favComments.includes(commentId);
      const updatedUser = {
        ...user,
        favComments: isLiked
          ? user.favComments.filter((id) => id !== commentId)
          : [...user.favComments, commentId],
      };
      setUser(updatedUser);

      await toggleFavComments(commentId);

      const updatedComments = await getByRecipient('Forum', id);
      setComments(updatedComments);
    } catch (error) {
      console.error('Error liking comment:', error);
    }
  };

  useEffect(() => {
    fetchFullForum();
  }, [updateComments]);

  useEffect(() => {
    console.log('updateComments', updateComments);
    useCommentError(resComment, setResComment, setUpdateComments);
  }, [resComment, updateComments]);

  useEffect(() => {
    if (fullForum != null) {
      getComments();
    }
  }, [fullForum]);

  return (
    <div className="ForumDetail-comment-container">
      <div>{fullForum?.data && <ForumFigureDetail forumData={fullForum.data} />}</div>
      <section className="commentSection">
        <div className="Leave-a-comment">
          <img className="icon" src={user.image} alt={user.user} />
          <input
            type="text"
            id="content"
            value={contentValue}
            name="content"
            placeholder="Leave a comment ..."
            onChange={(e) => setContentValue(e.target.value)}
          />
          <button
            type="submit"
            disabled={send}
            onClick={() => handleComment()}
            className="material-symbols-outlined"
          >
            <span>add</span>
          </button>
        </div>
        <h1>LO DEJO A MEDIAS, MAÑANA SIGO </h1>
        <div className="comments-section">
          {comments &&
            comments?.data?.map((singleComment) => (
              <div key={singleComment?._id}>
                <Comments
                  comment={singleComment}
                  setCommentsByChild={setComments}
                  handleLikeComment={handleLikeComment}
                />
                <div className="comments-section-subsect">
                  <button onClick={() => handleLikeComment(singleComment._id)}>
                    Like
                  </button>
                  <CommentDeletion
                    idComment={singleComment._id}
                    setUpdateComments={setUpdateComments}
                  />
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};
