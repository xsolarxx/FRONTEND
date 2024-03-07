export const ForumFigureDetail = ({ forumData }) => {
  const creationDate = new Date(forumData.createdAt);
  const formattedDate = creationDate.toLocaleString('es-ES', {
    timeZone: 'Europe/Madrid',
  });

  return (
    <div className="containerForum">
      <div className="containerForumOwner">
        <img
          className="imgOwnerForum"
          src={forumData.owner.image}
          alt={forumData.owner.userName}
        />
        <h6 className="nameOwnerForum">{forumData.owner.userName}</h6>
      </div>
      <div className="containerForumInfo">
        <img className="imgForum" src={forumData.image} alt={forumData.title} />
        <h3 className="forumTitle">{forumData.title}</h3>
        <p className="forumCreation">{formattedDate}</p>
        <p className="forumContent">{forumData.content}</p>
      </div>
    </div>
  );
};
