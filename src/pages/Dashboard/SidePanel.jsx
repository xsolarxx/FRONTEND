import { useAuth } from '../../context/authContext';
import { NavLink } from 'react-router-dom';

export const SidePanel = () => {
  const { user } = useAuth();
  return (
    <section className="user-side-pannel">
      <h3>
        Hi {}
        <span
          style={{
            textDecoration: 'underline',
            textDecorationColor: '#97f85b',
            textDecorationThickness: '3px',
          }}
        >
          {user.name}
        </span>
      </h3>
      <img className="dashboard-profile" src={user.image} alt="foto User" />
      <p>{user.email}</p>
      <NavLink to="/profile">
        <p>Update Profile</p>
      </NavLink>
      <hr className="dashboard_line" />

      <h5>Companies summary </h5>
      <p>Liked companies: {user?.likedCompany?.length}</p>
      {/* <p> Companies Punctuated: {user.companyPunctuated.length}</p> */}
      {console.log('punctuated', user)}

      <h5>Forum summary </h5>

      <p>Liked Forum: {user?.likedForum?.length}</p>
      <p>Creader Forum: {user?.forumOwner?.length}</p>
      <p>Creader Forum: {user?.forumOwner?.length}</p>

      <h5>Network Summary </h5>
      <p>Following: {user?.usersFollowed?.length}</p>
      <p>Followers: {user?.usersFollowers?.length}</p>
    </section>
  );
};
