import './Dashboard.css';

import React from 'react';

import { useAuth } from '../../context/authContext';

export const Dashboard = () => {
  const { user } = useAuth(); // Utiliza el hook useAuth para acceder al contexto de autenticación
  console.log('entro', user);
  return (
    <>
      <section className="welcomeUser">
        <h1>Welcome to our App {user.email}</h1>
        {/* Utiliza la interpolación de cadena dentro de las comillas invertidas */}
      </section>
    </>
  );
};
