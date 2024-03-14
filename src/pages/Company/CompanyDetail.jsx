import '../Forum/ForumDetail.css';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { useCommentError } from '../../hooks';

import { Comments } from '../../components/Comments/Comments';
import { CompanyDetailCard } from '../../components/Cards/ComapanyDetailCard';
import { getByIdCompany } from '../../services/company.service';
import { createComment, getByRecipient } from '../../services/comment.service';
import { CommentDeletion } from '../../components/CommentDeletion/CommentDeletion';
import { LikeComments } from '../../components/LikeComment/LikeComment';

export const CompanyDetail = () => {
  const { id } = useParams();
  const { user, setUser } = useAuth();

  const [fullCompany, setFullCompany] = useState();
  const [send, setSend] = useState(false);
  const [resComment, setResComment] = useState({});
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

  const fetchFullCompany = async () => {
    setFullCompany(await getByIdCompany(id));
  };

  const handleComment = async () => {
    const customFormData = {
      owner: user,
      content: contentValue,
    };
    setSend(true);
    setResComment(await createComment(id, customFormData));
    setContentValue('');
    setSend(false);
  };

  const fetchComments = async () => {
    setComments(await getByRecipient('Company', id));
  };

  useEffect(() => {
    fetchFullCompany();
  }, [updateComments]);

  useEffect(() => {
    useCommentError(resComment, setResComment, setUpdateComments, user, setUser);
  }, [resComment, updateComments]);

  useEffect(() => {
    if (fullCompany != null) {
      fetchComments();
    }
  }, [fullCompany]);

  return (
    <div className="ForumDetail-comment-container">
      {fullCompany?.data && <CompanyDetailCard company={fullCompany.data} />}
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
        <div className="comments-box">
          {comments &&
            comments?.data?.map((singleComment) => (
              <div className="comments-section-comment" key={singleComment?._id}>
                <Comments comment={singleComment} setCommentsByChild={setComments} />
                <div>
                  <div className="comments-icons">
                    {singleComment.owner._id === user._id && (
                      <CommentDeletion
                        idComment={singleComment._id}
                        setUpdateComments={setUpdateComments}
                      />
                    )}
                    <LikeComments
                      className="LikeIcon--green"
                      idComment={singleComment._id}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};
