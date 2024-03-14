import React from 'react';
import { NavLink } from 'react-router-dom';
import { DashboardList } from '../../components';

const FollowDas = ({ userDashboard }) => {
  return (
    <div className="otraCaja">
      <h2>Network</h2>
      <div>
        <h4>Following</h4>
        <section className="user-pannel-section">
          {userDashboard?.usersFollowed?.length ? (
            userDashboard.usersFollowed.map((item, index) => (
              <NavLink to={`/profileDetail/${item._id}`} key={index}>
                <DashboardList name={item.userName} key={index} image={item.image} />
              </NavLink>
            ))
          ) : (
            <p>No followed users</p>
          )}
        </section>
      </div>

      <h4>Followers</h4>
      <section className="user-pannel-section">
        {userDashboard?.usersFollowers?.length ? (
          userDashboard.usersFollowers.map((item, index) => (
            <NavLink to={`/profileDetail/${item._id}`} key={index}>
              <DashboardList name={item.userName} key={index} image={item.image} />
            </NavLink>
          ))
        ) : (
          <p>No followers</p>
        )}
      </section>
    </div>
  );
};

export default FollowDas;
