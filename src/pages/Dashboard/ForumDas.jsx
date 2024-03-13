import React from 'react';
import { NavLink } from 'react-router-dom';
import { DashboardList } from '../../components';

export const ForumDas = ({ userDashboard }) => {
  return (
    <div className="otraCaja">
      <h2>My Forum </h2>
      <h4>Liked Forums</h4>
      <section className="user-pannel-section">
        {userDashboard?.likedForum?.length ? (
          userDashboard.likedForum.map((item, index) => (
            <NavLink to={`/ForumDetail/${item._id}`} key={index}>
              <DashboardList name={item.title} key={index} image={item.image} />
            </NavLink>
          ))
        ) : (
          <p>No liked forums</p>
        )}
      </section>
      <h4>Created Forums</h4>
      <section className="user-pannel-section">
        {userDashboard?.forumOwner?.length ? (
          userDashboard.forumOwner.map((item, index) => (
            <NavLink to={`/ForumDetail/${item._id}`} key={index}>
              <DashboardList name={item.title} key={index} image={item.image} />
            </NavLink>
          ))
        ) : (
          <p>No created forums</p>
        )}
      </section>
      <div>
        <h4>Followed Forum</h4>
        <section className="user-pannel-section">
          {userDashboard?.forumFollowing?.length ? (
            userDashboard.forumFollowing.map((item, index) => (
              <NavLink to={`/ForumDetail/${item._id}`} key={index}>
                <DashboardList name={item.title} key={index} image={item.image} />
              </NavLink>
            ))
          ) : (
            <p>No followed forums</p>
          )}
        </section>
      </div>
    </div>
  );
};
