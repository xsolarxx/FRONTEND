import './CompanyCard.css';

import { LikeCompany } from '../LikeButtonCompany/LikeButton';

export const CompanyCard = ({ company }) => {
  return (
    <div className="containerCompany">
      <h3 className="companyName">Name: {company.companyName} </h3>
      <p className="companyDescription">description: {company.description}</p>
      <img className="imgCompany" src={company.image} alt={company.name} />
      <h2 className="companyType"> Type:{company.type}</h2>
      <p className="companyServices">Services offered:{company.companyServices}</p>
      <LikeCompany id={company._id} />
    </div>
  );
};
