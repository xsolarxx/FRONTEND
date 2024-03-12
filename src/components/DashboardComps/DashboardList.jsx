import './DashboardList.css';

export const DashboardList = ({ name, image, content, email, title }) => {
  return (
    <div className="DashboardList">
      {image && <img className="DashboardList_icon" src={image} alt="" />}
      <h4> {name} </h4>
      <p> {content}</p>
      <p> {email} </p>
    </div>
  );
};
