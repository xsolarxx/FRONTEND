import './CompanyCard.css';
import { useNavigate } from 'react-router-dom';
import { LikeCompany } from '../LikeButtonCompany/LikeButton';

export const CompanyCard = ({ company }) => {
  const navigate = useNavigate();
  return (
    <div className="containerCompany">
      <img className="section-company__image" src={company.image} alt={company.name} />
      <div className="section-company__text">
        <h1 className="companyName">{company.companyName} </h1>
        <p className="companyDescription"> {company.description}</p>
        <p className="companyType">Type:{company.companyType}</p>
        <parseInt className="companyServices">{company.companyServices}</parseInt>

        <LikeCompany id={company._id} />
        <button
          className="button--blue"
          onClick={() => {
            navigate(`/companyDetail/${company._id}`);
          }}
        >
          Read more
        </button>
      </div>
    </div>
  );
};
