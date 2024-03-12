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
    <>
      <div>{fullForum?.data && <ForumFigureDetail forumData={fullForum.data} />}</div>
      <section className="commentSection">
        <h6>Leave a comment</h6>
        <div className="addComment">
          <input
            className="input_user"
            type="text"
            id="content"
            value={contentValue}
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
        <div className="allComments">
          {comments &&
            comments?.data?.map((singleComment) => (
              <div key={singleComment?._id}>
                <Comments
                  comment={singleComment}
                  setCommentsByChild={setComments}
                  handleLikeComment={handleLikeComment}
                />
                <button onClick={() => handleLikeComment(singleComment._id)}>Like</button>
                <CommentDeletion
                  idComment={singleComment._id}
                  setUpdateComments={setUpdateComments}
                />
              </div>
            ))}
        </div>
      </section>
    </>
  );
};
