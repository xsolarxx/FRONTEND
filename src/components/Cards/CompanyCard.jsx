import './CompanyCard.css';
import { useNavigate } from 'react-router-dom';
import { LikeCompany } from '../LikeButtonCompany/LikeButton';

export const CompanyCard = ({ company }) => {
  const navigate = useNavigate();
  return (
    <div className="containerCompany">
      <h3 className="companyName">Name: {company.companyName} </h3>
      <img className="imgCompany" src={company.image} alt={company.name} />
      <h2 className="companyType"> Type:{company.type}</h2>
      <p className="companyServices">Services offered:{company.companyServices}</p>
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
  );
};
