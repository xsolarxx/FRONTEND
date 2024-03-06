export const ForumFigure = ({ forum }) => {
  return (
    <div className="containerForum">
      <div className="containerForumOwner">
        <img
          className="imgOwnerForum"
          src={forum.owner.image}
          alt={forum.owner.userName}
        />
        <h6 className="nameOwnerForum">{forum.owner.userName}</h6>
      </div>
      <div className="containerForumInfo">
        <img className="imgForum" src={forum.image} alt={forum.title} />
        <h6 className="forumTitle">{forum.title}</h6>
        <p className="forumContent">{forum.content}</p>
      </div>
    </div>
  );
};
