import { useAuth } from '../../context/authContext';
import { NavLink } from 'react-router-dom';

export const SidePanel = () => {
  const { user } = useAuth();
  return (
    <section className="user-side-pannel">
      <h4>
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
      </h4>
      <img className="dashboard-profile" src={user.image} alt="foto User" />
      <p>{user.email}</p>
      <NavLink to="/profile">
        <p>Update Profile</p>
      </NavLink>
      <hr className="dashboard_line" />

      <p style={{ fontWeight: 'bold' }}>Companies summary</p>
      <p>Liked companies: {user?.likedCompany?.length}</p>
      {/* <p> Companies Punctuated: {user.companyPunctuated.length}</p> */}
      {console.log('punctuated', user)}

      <p style={{ fontWeight: 'bold' }}>Forum summary</p>

      <p>Liked Forum: {user?.likedForum?.length}</p>
      <p>Creader Forum: {user?.forumOwner?.length}</p>
      <p>Followed Forum: {user?.followed?.length}</p>

      <p style={{ fontWeight: 'bold' }}>Network Summary</p>

      <p>Following: {user?.usersFollowed?.length}</p>
      <p>Followers: {user?.usersFollowers?.length}</p>

      <p style={{ fontWeight: 'bold' }}>News Summary</p>
      <p>Liked News: {user?.likedNews?.length}</p>

      <p style={{ fontWeight: 'bold' }}>Comments Summary</p>
      <p>Liked favComments: {user?.usersFollowed?.length}</p>
      <p>My Comments: {user?.comments?.length}</p>
    </section>
  );
};
