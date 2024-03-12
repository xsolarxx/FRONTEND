import './DashboardList.css';

export const DashboardList = ({ name, image, content, email, title }) => {
  return (
    <div className="DashboardList">
      {image && <img className="DashboardList_icon" src={image} alt="" />}
      {name && <h5>{name}</h5>}
      {content && <p>{content}</p>}
    </div>
  );
};
