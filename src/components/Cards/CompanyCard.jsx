import './CompanyCard.css';
import { useNavigate } from 'react-router-dom';
import { LikeCompany } from '../LikeButtonCompany/LikeButton';
import { ScrollToTopButton } from '../Buttons/ScrollToTopButton';

export const CompanyCard = ({ company }) => {
  const navigate = useNavigate();
  return (
    <div className="containerCompany">
      <img className="section-company__image" src={company.image} alt={company.name} />
      <div className="section-company__text">
        <h3 className="companyName">{company.companyName} </h3>
        <p className="companyDescription"> {company.description}</p>
        <div className="company-tags">
          <p className="companyType">{company.companyType}</p>
          <p className="companyServices">{company.companyServices}</p>
          <LikeCompany id={company._id} />
          <br />
          <button
            className="button--blue"
            onClick={() => {
              navigate(`/companyDetail/${company._id}`);
            }}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
