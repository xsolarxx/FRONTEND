import React from 'react';
import { NavLink } from 'react-router-dom';
import { DashboardList } from '../../components';

export const CommentDas = ({ userDashboard }) => {
  return (
    <div className="otraCaja">
      <h2>My comments</h2>
      <h4>Liked comments</h4>
      <section className="user-pannel-section">
        {userDashboard &&
        userDashboard.favComments &&
        userDashboard.favComments.length > 0 ? (
          userDashboard.favComments.map((item, index) => (
            <NavLink to={`/comment/${item._id}`} key={index}>
              <DashboardList content={item.content} key={index} />
            </NavLink>
          ))
        ) : (
          <>
            <p>No liked comments available</p>
          </>
        )}
      </section>
      <h4>Comments</h4>
      <section className="user-pannel-section">
        {userDashboard && userDashboard.comments && userDashboard.comments.length > 0 ? (
          userDashboard.comments.map((item, index) => (
            <NavLink to={`/comment/${item._id}`} key={index}>
              <DashboardList content={item.content} key={index} />
            </NavLink>
          ))
        ) : (
          <p>No comments available</p>
        )}
      </section>
    </div>
  );
};

export default CommentDas;
