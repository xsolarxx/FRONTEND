export const ForumFigure = ({ forum }) => {
  const creationDate = new Date(forum.createdAt);
  const formattedDate = creationDate.toLocaleString('es-ES', {
    timeZone: 'Europe/Madrid',
  });

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
        <h3 className="forumTitle">{forum.title}</h3>
        <p className="forumCreation">{formattedDate}</p>
        <p className="forumContent">{forum.content}</p>
      </div>
    </div>
  );
};
