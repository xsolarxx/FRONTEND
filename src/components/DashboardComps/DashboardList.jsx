import './DashboardList.css';
export const DashboardList = ({ name, image, content }) => {
  return (
    <div className="DashboardList">
      <img className="icon" src={image} alt="" />
      <h4> {name} </h4>
      <p> {content}</p>
    </div>
  );
};
