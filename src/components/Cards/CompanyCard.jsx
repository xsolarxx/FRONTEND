import './CompanyCard.css';
import { useNavigate } from 'react-router-dom';
import { LikeCompany } from '../LikeButtonCompany/LikeButton';

export const CompanyCard = ({ company }) => {
  const navigate = useNavigate();
  return (
    <div className="containerPadre">
      <div className="containerCompany">
        <h6 className="companyName">Name: {company.companyName} </h6>
        <h6 className="companyType"> Type:{company.type}</h6>
        <h6 className="companyServices">Services offered:{company.companyServices}</h6>
        <div className="imgCompany1">
          <img className="imgCompany" src={company.image} alt={company.name} />
        </div>
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
