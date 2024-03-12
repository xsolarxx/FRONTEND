import './DashboardList.css';
export const DashboardList = ({ name, image, content, email }) => {
  return (
    <div className="DashboardList">
      <img className="DashboardList_icon" src={image} alt="" />
      <h4> {name} </h4>
      <p> {content}</p>
      <p> {email}</p>
    </div>
  );
};
