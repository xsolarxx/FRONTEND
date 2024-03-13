import React from 'react';
import { NavLink } from 'react-router-dom';
import { DashboardList } from '../../components';

export const ForumDas = ({ userDashboard }) => {
  return (
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
  );
};
