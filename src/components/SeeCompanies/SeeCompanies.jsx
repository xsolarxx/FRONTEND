import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export const SeeCompanies = ({ user }) => {
  const navigate = useNavigate();

  const handleNavLinkClick = () => {
    if (user == null) {
      navigate('/login');
    } else {
      navigate('/company');
    }
  };

  return (
    <NavLink to={user !== null ? '/company' : '/login'} onClick={handleNavLinkClick}>
      <button className="button--green">See companies</button>
    </NavLink>
  );
};
