import './Dashboard.css';

import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { DashboardList } from '../../components';
import { useAuth } from '../../context/authContext';
import { getByIdPopulate } from '../../services/user.service';

export const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [userDashboard, setUserDashboard] = useState(null);

  console.log('entro', user);
  const fetchUserData = async () => {
    const res = await getByIdPopulate(user?._id);
    setUserDashboard(res.data);
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  // userDashboard?.item.map((item) => {
  //   console.log('entreooo', item);
  // });
  return (
    <div className="dashboard-conatiner">
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
        <h5>Liked companies: {user?.likedCompany?.length}</h5>
        <h5>Liked Forum: {user?.likedForum?.length}</h5>
        <h5>Liked News: {user?.likedNews?.length}</h5>
        <h5>Following: {user?.usersFollowed?.length}</h5>
        <h5>Followers: {user?.usersFollowers?.length}</h5>
        <h5>Creader Forum: {user?.forumOwner?.length}</h5>
        {/* <h5> Companies Punctuated: {user.companyPunctuated.length}</h5> */}
      </section>

      <div className="user-main-pannel">
        <h2>Liked companies</h2>
        {userDashboard &&
          userDashboard.likedCompany?.map((item, index) => (
            <>
              <NavLink to={`/CompanyDetail/${item._id}`} key={index}>
                <DashboardList
                  name={item.companyName}
                  image={item.image}
                  email={item.email}
                  key={index}
                />
              </NavLink>
            </>
          ))}
        <h2>My rated companies</h2>
        {userDashboard &&
          userDashboard.ownerRating?.map((item, index) => (
            <NavLink to={`/CompanyDetail/${item._id}`} key={index}>
              <DashboardList
                name={item.userPunctuation}
                companyName={item.companyPunctuated}
                key={index}
              />
            </NavLink>
          ))}
        <h2>Liked News</h2>
        {userDashboard &&
          userDashboard.likedNews?.map((item, index) => (
            <>
              <NavLink to={`/NewsDetail/${item._id}`} key={index}>
                <DashboardList name={item.title} key={index} image={item.image} />
              </NavLink>
            </>
          ))}
        <h2>Liked Forums</h2>
        {userDashboard &&
          userDashboard.likedForum?.map((item, index) => (
            <>
              <NavLink to={`/ForumDetail/${item._id}`} key={index}>
                <DashboardList name={item.title} key={index} image={item.image} />
              </NavLink>
            </>
          ))}
        <h2>My created Forums</h2>
        {userDashboard &&
          userDashboard.forumOwner?.map((item, index) => (
            <>
              <NavLink to={`/ForumDetail/${item._id}`} key={index}>
                <DashboardList name={item.title} key={index} image={item.image} />
              </NavLink>
            </>
          ))}
        <h2>Forum Following</h2>
        {userDashboard &&
          userDashboard.forumFollowing?.map((item, index) => (
            <>
              <NavLink to={`/ForumDetail/${item._id}`} key={index}>
                <DashboardList name={item.title} key={index} image={item.image} />
              </NavLink>
            </>
          ))}
        <h1>My network </h1>
        <h2>Following</h2>
        {userDashboard &&
          userDashboard.usersFollowed?.map((item, index) => (
            <>
              <NavLink to={`/UserDetail/${item._id}`} key={index}>
                <DashboardList name={item.userName} key={index} image={item.image} />
              </NavLink>
            </>
          ))}
        <h2>My Followers</h2>
        {userDashboard &&
          userDashboard.usersFollowers?.map((item, index) => (
            <>
              <NavLink to={`/UserDetail/${item._id}`} key={index}>
                <DashboardList name={item.userName} key={index} image={item.image} />
              </NavLink>
            </>
          ))}
        <h1>My comments</h1>
        <h2>Liked comments</h2>
        {userDashboard &&
          userDashboard.favComments?.map((item, index) => (
            <>
              <NavLink to={`/comment/${item._id}`} key={index}>
                <DashboardList name={item.content} key={index} />
              </NavLink>
            </>
          ))}
        <h2>My comments</h2>
        {userDashboard &&
          userDashboard.comments?.map((item, index) => (
            <>
              <NavLink to={`/comment/${item._id}`} key={index}>
                <DashboardList name={item.content} key={index} />
              </NavLink>
            </>
          ))}
      </div>
    </div>
  );
};
