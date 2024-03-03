import './Dashboard.css';

import React from 'react';

import { useAuth } from '../../context/authContext';

export const Dashboard = () => {
  const { user } = useAuth(); // Utiliza el hook useAuth para acceder al contexto de autenticación
  console.log('entro', user);
  return (
    <>
      <section className="welcomeUser">
        <h4>Welcome to our App </h4>
        <h4>{user.email}</h4>
        {/* Utiliza la interpolación de cadena dentro de las comillas invertidas */}
        <img className="pictureProfile" src={user.image} alt="foto User" />
      </section>
      <section className="favoriteCompany">
        <p>
          <strong>Mis Empresas Favoritas:</strong>
        </p>
      </section>
      <section className="feedUser">
        <p>test feed</p>
      </section>
    </>
  );
};
