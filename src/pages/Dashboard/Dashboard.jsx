import './Dashboard.css';

import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { DashboardList } from '../../components';
import { useAuth } from '../../context/authContext';
import { getByIdPopulate } from '../../services/user.service';

export const Dashboard = () => {
  const { user } = useAuth();
  const [userDashboard, setUserDashboard] = useState(null);

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
        <h2>My companies</h2>
        <h4>Liked companies</h4>

        <section className="user-pannel-section">
          {userDashboard && userDashboard.likedCompany?.length > 0 ? (
            userDashboard.likedCompany.map((item, index) => (
              <NavLink to={`/CompanyDetail/${item._id}`} key={index}>
                <DashboardList
                  name={item.companyName}
                  image={item.image}
                  email={item.email}
                  key={index}
                />
              </NavLink>
            ))
          ) : (
            <p>No liked companies. Give some likes!</p>
          )}
        </section>
        <h4>My rated companies</h4>
        <section className="user-pannel-section">
          {userDashboard && userDashboard.companyPunctuated?.length > 0 ? (
            userDashboard.companyPunctuated.map((item, index) => (
              <NavLink to={`/CompanyDetail/${item._id}`} key={index}>
                <DashboardList name={item.companyName} image={item.image} key={index} />
              </NavLink>
            ))
          ) : (
            <p>No rated companies.</p>
          )}
        </section>
        <h4>Liked News</h4>
        <section className="user-pannel-section">
          {userDashboard && userDashboard.likedNews?.length > 0 ? (
            userDashboard.likedNews.map((item, index) => (
              <NavLink to={`/NewsDetail/${item._id}`} key={index}>
                <DashboardList name={item.title} key={index} image={item.image} />
              </NavLink>
            ))
          ) : (
            <p>No liked news.</p>
          )}
        </section>
        <h2>My Forum </h2>
        <h4>Liked Forums</h4>
        <section className="user-pannel-section">
          {userDashboard && userDashboard.likedForum?.length > 0 ? (
            userDashboard.likedForum.map((item, index) => (
              <NavLink to={`/ForumDetail/${item._id}`} key={index}>
                <DashboardList name={item.title} key={index} image={item.image} />
              </NavLink>
            ))
          ) : (
            <p>No liked forums.</p>
          )}
        </section>
        <h4>My created Forums</h4>
        <section className="user-pannel-section">
          {userDashboard && userDashboard.forumOwner?.length > 0 ? (
            userDashboard.forumOwner.map((item, index) => (
              <NavLink to={`/ForumDetail/${item._id}`} key={index}>
                <DashboardList name={item.title} key={index} image={item.image} />
              </NavLink>
            ))
             ) : (
              <p>You havent created any forum yet</p>
          )}
        </section>
        <div>
          <h4>Forum Following</h4>
          <section className="user-pannel-section">
            {userDashboard && userDashboard.forumFollowing?.length > 0 ? (
              userDashboard.forumFollowing.map((item, index) => (
                <NavLink to={`/ForumDetail/${item._id}`} key={index}>
                  <DashboardList name={item.title} key={index} image={item.image} />
                </NavLink>
              ))
            ) : (
              <p>No forums followed.</p>
            )}
          </section>
        </div>

        <h2>My network </h2>
        <section className="user-pannel-section"></section>
        <div>
          <h4>Following</h4>
          <section className="user-pannel-section">
            {userDashboard && userDashboard.usersFollowed?.length > 0 ? (
              userDashboard.usersFollowed.map((item, index) => (
                <NavLink to={`/UserDetail/${item._id}`} key={index}>
                  <DashboardList name={item.userName} key={index} image={item.image} />
                </NavLink>
              ))
            ) : (
              <p>No users followed.</p>
            )}
          </section>
        </div>

        <h4>My Followers</h4>
        <section className="user-pannel-section">
          {userDashboard && userDashboard.usersFollowers?.length > 0 ? (
            userDashboard.usersFollowers.map((item, index) => (
              <NavLink to={`/UserDetail/${item._id}`} key={index}>
                <DashboardList name={item.userName} key={index} image={item.image} />
              </NavLink>
            ))
          ) : (
            <p>No followers.</p>
          )}
        </section>

        <h2>My comments</h2>
        <h4>Liked comments</h4>
        <section className="user-pannel-section">
          {userDashboard && userDashboard.favComments?.length > 0 ? (
            userDashboard.favComments.map((item, index) => (
              <NavLink to={`/comment/${item._id}`} key={index}>
                <DashboardList content={item.content} key={index} />
              </NavLink>
            ))
          ) : (
            <p>No liked comments.</p>
          )}
        </section>
        {/* TESTING COMMENTS FETCH  */}
        <h4>Forum Comments</h4>
        <section className="user-pannel-section">
          {userDashboard && userDashboard.comments?.length > 0 ? (
            userDashboard.comments.map((item, index) => (
              <NavLink to={`/comment/${item._id}`} key={index}>
                <DashboardList content={item.content} key={index} />
              </NavLink>
            ))
          ) : (
            <p>No forum comments.</p>
          )}
        </section>
      </div>
    </div>
  );
};
