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
        </section>
        <h4>My rated companies</h4>
        <section className="user-pannel-section">
          {userDashboard &&
            userDashboard.companyPunctuated?.map((item, index) => (
              <NavLink to={`/CompanyDetail/${item._id}`} key={index}>
                <DashboardList name={item.companyName} key={index} />
              </NavLink>
            ))}
        </section>
        <h4>Liked News</h4>
        <section className="user-pannel-section">
          {userDashboard &&
            userDashboard.likedNews?.map((item, index) => (
              <>
                <NavLink to={`/NewsDetail/${item._id}`} key={index}>
                  <DashboardList name={item.title} key={index} image={item.image} />
                </NavLink>
              </>
            ))}
        </section>
        <h4>Liked Forums</h4>
        <section className="user-pannel-section">
          {userDashboard &&
            userDashboard.likedForum?.map((item, index) => (
              <>
                <NavLink to={`/ForumDetail/${item._id}`} key={index}>
                  <DashboardList name={item.title} key={index} image={item.image} />
                </NavLink>
              </>
            ))}
        </section>
        <h4>My created Forums</h4>
        <section className="user-pannel-section">
          {userDashboard &&
            userDashboard.forumOwner?.map((item, index) => (
              <>
                <NavLink to={`/ForumDetail/${item._id}`} key={index}>
                  <DashboardList name={item.title} key={index} image={item.image} />
                </NavLink>
              </>
            ))}
        </section>
        <h4>Forum Following</h4>
        <section className="user-pannel-section">
          {userDashboard &&
            userDashboard.forumFollowing?.map((item, index) => (
              <>
                <NavLink to={`/ForumDetail/${item._id}`} key={index}>
                  <DashboardList name={item.title} key={index} image={item.image} />
                </NavLink>
              </>
            ))}
        </section>
        <h2>My network </h2>
        <section className="user-pannel-section"></section>
        <h4>Following</h4>
        <section className="user-pannel-section">
          {userDashboard &&
            userDashboard.usersFollowed?.map((item, index) => (
              <>
                <NavLink to={`/UserDetail/${item._id}`} key={index}>
                  <DashboardList name={item.userName} key={index} image={item.image} />
                </NavLink>
              </>
            ))}
        </section>
        <h4>My Followers</h4>
        <section className="user-pannel-section">
          {userDashboard &&
            userDashboard.usersFollowers?.map((item, index) => (
              <>
                <NavLink to={`/UserDetail/${item._id}`} key={index}>
                  <DashboardList name={item.userName} key={index} image={item.image} />
                </NavLink>
              </>
            ))}
        </section>
        <h2>My comments</h2>
        <section className="user-pannel-section"></section>
        <h4>Liked comments</h4>
        <section className="user-pannel-section">
          {userDashboard &&
            userDashboard.favComments?.map((item, index) => (
              <>
                <NavLink to={`/comment/${item._id}`} key={index}>
                  <DashboardList content={item.content} key={index} />
                </NavLink>
              </>
            ))}
        </section>
        {/* TESTING COMMENTS FETCH  */}
        <h4>Forum Comments</h4>
        <section className="user-pannel-section">
          {userDashboard &&
            userDashboard.comments?.map((item, index) => (
              <>
                <NavLink to={`/comment/${item._id}`} key={index}>
                  <DashboardList content={item.content} key={index} />
                </NavLink>
              </>
            ))}
        </section>
      </div>
    </div>
  );
};
