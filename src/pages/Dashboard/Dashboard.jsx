import './Dashboard.css';

import React from 'react';

import { useAuth } from '../../context/authContext';

export const Dashboard = () => {
  const { user } = useAuth(); // Utiliza el hook useAuth para acceder al contexto de autenticación
  return (
    <>
      <section className="welcomeUser">
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

      <section className="favoriteCompany">
        <h3>Mis Empresas Favoritas:</h3>
      </section>

      <section className="feedUser">
        <p>test feed</p>
      </section>
    </>
  );
};
