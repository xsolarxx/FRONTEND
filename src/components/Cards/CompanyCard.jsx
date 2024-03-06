import './CompanyCard.css';

import { LikeButton } from '../LikeButtonCompany/LikeButton';

export const CompanyCard = ({ company }) => {
  return (
    <div className="containerCompany">
      <h3 className="companyName">{company.companyName} </h3>
      <p className="companyDescription"> {company.description}</p>
      <img className="imgCompany" src={company.image} alt={company.name} />
      <h2 className="companyType"> {company.type}</h2>
      <p className="companyServices">{company.companyServices}</p>
      <LikeButton />
    </div>
  );
};