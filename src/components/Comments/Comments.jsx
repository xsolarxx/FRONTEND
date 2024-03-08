export const Comments = ({ comment, setCommentsByChild }) => {
  return (
    <>
      <div className="commentOwnerContainer">
        <h6>{comment.owner.userName}</h6>
        <p>{comment.title}</p>
        <p>{comment.content}</p>
      </div>
    </>
  );
};
