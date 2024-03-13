import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

export const SeeCompanies = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  return (
    <button
      className="button--green"
      onClick={() => {
        user ? navigate('/company') : navigate('/register');
      }}
    >
      {user ? 'See companies' : 'Register to see companies'}
    </button>
  );
};
