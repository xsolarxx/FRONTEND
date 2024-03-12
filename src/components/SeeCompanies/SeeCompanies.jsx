import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const SeeCompanies = ({ isAuthenticated }) => {
  const history = useHistory();

  const handleSeeCompaniesClick = () => {
    if (isAuthenticated) {
      history.push('/company');
    } else {
      history.push('/login');
    }
  };

  return (
    <button className="button--green" onClick={handleSeeCompaniesClick}>
      See companies
    </button>
  );
};

export default SeeCompanies;
