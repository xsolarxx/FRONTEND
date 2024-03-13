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
    useCommentError(resComment, setResComment, setUpdateComments);
  }, [resComment, updateComments]);

  useEffect(() => {
    if (fullCompany != null) {
      fetchComments();
    }
  }, [fullCompany]);

  return (
    <div>
      {fullCompany?.data && <CompanyDetailCard company={fullCompany.data} />}
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
            className="button--blue"
            type="submit"
            disabled={send}
            onClick={() => handleComment()}
          >
            Add comment
          </button>
        </div>
        <div>
          {comments &&
            comments?.data?.map((singleComment) => (
              <div key={singleComment?._id}>
                <Comments comment={singleComment} setCommentsByChild={setComments} />
                <div>
                  {singleComment.owner._id === user._id && (
                    <CommentDeletion
                      idComment={singleComment._id}
                      setUpdateComments={setUpdateComments}
                    />
                  )}
                  <LikeComments idComment={singleComment._id} />
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};
