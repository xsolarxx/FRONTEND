import './Dashboard.css';

import React from 'react';

import { useAuth } from '../../context/authContext';

export const Dashboard = () => {
  const { user } = useAuth(); // Utiliza el hook useAuth para acceder al contexto de autenticación
  return (
    <>
      <div className="dashboard-conatiner">
        <section className="user-side-pannel">
          <h2>
            Welcome {}
            <span
              style={{
                textDecoration: 'underline',
                textDecorationColor: '#97f85b',
                textDecorationThickness: '3px',
              }}
            >
              {user.name}
            </span>
          </h2>
          <img className="profile-photo" src={user.image} alt="foto User" />
        </section>

        <section className="user-main-pannel">
          <section className="user-pannel-section">
            <h2>Companies</h2>
          </section>
          <section className="user-pannel-section">
            <h2>News</h2>
          </section>
          <section className="user-pannel-section">
            <h2>Forum</h2>
          </section>
        </section>
      </div>
    </>
  );
};
