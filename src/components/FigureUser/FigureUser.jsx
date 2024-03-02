import './FigureUser.css';
export const FigureUser = (user) => {
  console.log(user);
  return (
    <figure className="dataProfile">
      <img src={user.user.image} alt="user" className="imageUser" />
      <h4 className="emailUser">Email: {user.user.email}</h4>
    </figure>
  );
};