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

        <h5>Companies summary </h5>
        {/* <p>Liked companies: {user?.likedCompany?.length}</p>
        <p> Companies Punctuated: {user.companyPunctuated.length}</p>

        <h5>Forum summary </h5>

        <p>Liked Forum: {user?.likedForum?.length}</p>
        <p>Creader Forum: {user?.forumOwner?.length}</p>
        <p>Creader Forum: {user?.forumOwner?.length}</p>

        <h5>Network Summary </h5>
        <p>Following: {user?.usersFollowed?.length}</p>
        <p>Followers: {user?.usersFollowers?.length}</p> */}
      </section>

      <div className="user-main-pannel">
        <div className="otraCaja">
          <h2>My companies</h2>
          <h4>Liked companies</h4>

          <section className="user-pannel-section">
            {userDashboard && userDashboard.likedCompany
              ? userDashboard.likedCompany.map((item, index) => (
                  <NavLink to={`/CompanyDetail/${item._id}`} key={index}>
                    <DashboardList
                      name={item.companyName}
                      image={item.image}
                      email={item.email}
                      key={index}
                    />
                  </NavLink>
                ))
              : null}
          </section>

          <h4>My rated companies</h4>
          <section className="user-pannel-section">
            {userDashboard && userDashboard.companyPunctuated
              ? userDashboard.companyPunctuated.map((item, index) => (
                  <NavLink to={`/CompanyDetail/${item._id}`} key={index}>
                    <DashboardList
                      name={item.companyName}
                      image={item.image}
                      key={index}
                    />
                  </NavLink>
                ))
              : null}
          </section>
        </div>

        <div className="otraCaja">
          <h2>My Forum </h2>
          <h4>Liked Forums</h4>
          <section className="user-pannel-section">
            {userDashboard && userDashboard.likedForum
              ? userDashboard.likedForum.map((item, index) => (
                  <NavLink to={`/ForumDetail/${item._id}`} key={index}>
                    <DashboardList name={item.title} key={index} image={item.image} />
                  </NavLink>
                ))
              : null}
          </section>
          <h4>My created Forums</h4>
          <section className="user-pannel-section">
            {userDashboard && userDashboard.forumOwner
              ? userDashboard.forumOwner.map((item, index) => (
                  <NavLink to={`/ForumDetail/${item._id}`} key={index}>
                    <DashboardList name={item.title} key={index} image={item.image} />
                  </NavLink>
                ))
              : null}
          </section>
          <div>
            <h4>Forum Following</h4>
            <section className="user-pannel-section">
              {userDashboard && userDashboard.forumFollowing
                ? userDashboard.forumFollowing.map((item, index) => (
                    <NavLink to={`/ForumDetail/${item._id}`} key={index}>
                      <DashboardList name={item.title} key={index} image={item.image} />
                    </NavLink>
                  ))
                : null}
            </section>
          </div>
        </div>

        <div className="otraCaja">
          <h2>My network </h2>
          <div>
            <h4>Following</h4>
            <section className="user-pannel-section">
              {userDashboard && userDashboard.usersFollowed
                ? userDashboard.usersFollowed.map((item, index) => (
                    <NavLink to={`/UserDetail/${item._id}`} key={index}>
                      <DashboardList
                        name={item.userName}
                        key={index}
                        image={item.image}
                      />
                    </NavLink>
                  ))
                : null}
            </section>
          </div>

          <h4>Followers</h4>
          <section className="user-pannel-section">
            {userDashboard && userDashboard.usersFollowers
              ? userDashboard.usersFollowers.map((item, index) => (
                  <NavLink to={`/UserDetail/${item._id}`} key={index}>
                    <DashboardList name={item.userName} key={index} image={item.image} />
                  </NavLink>
                ))
              : null}
          </section>
        </div>
        <div className="otraCaja">
          <h2>My comments</h2>
          <h4>Liked comments</h4>
          <section className="user-pannel-section">
            {userDashboard && userDashboard.favComments
              ? userDashboard.favComments.map((item, index) => (
                  <NavLink to={`/comment/${item._id}`} key={index}>
                    <DashboardList content={item.content} key={index} />
                  </NavLink>
                ))
              : null}
          </section>
          <h4>Forum Comments</h4>
          <section className="user-pannel-section">
            {userDashboard && userDashboard.comments
              ? userDashboard.comments.map((item, index) => (
                  <NavLink to={`/comment/${item._id}`} key={index}>
                    <DashboardList content={item.content} key={index} />
                  </NavLink>
                ))
              : null}
          </section>
        </div>
        <div className="otraCaja">
          <h4>Liked News</h4>
          <section className="user-pannel-section">
            {userDashboard && userDashboard.likedNews
              ? userDashboard.likedNews.map((item, index) => (
                  <NavLink to={`/NewsDetail/${item._id}`} key={index}>
                    <DashboardList name={item.title} key={index} image={item.image} />
                  </NavLink>
                ))
              : null}
          </section>
        </div>
      </div>
    </div>
  );
};
