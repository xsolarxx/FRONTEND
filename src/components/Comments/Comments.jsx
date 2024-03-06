export const Comments = ({ comments }) => {
  return (
    <div>
      {comments &&
        comments.map((comments) => (
          <div key={comments._id} className="containerNews">
            <h1 className="newsTitle">{comments.content}</h1>
            <p className="newsShortContent">{comments.createdAt}</p>
            <p className="newsShortContent">{comments.updatedAt}</p>
            <p className="newsAuthor">{comments.likes}</p>
            <p className="newsTags">{comments.title}</p>
          </div>
        ))}
    </div>
  );
};
