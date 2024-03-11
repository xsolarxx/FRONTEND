export const DashboardList = ({ name, image }) => {
  return (
    <div>
      <h3> {name} </h3>
      <img src={image} alt="" />
    </div>
  );
};
