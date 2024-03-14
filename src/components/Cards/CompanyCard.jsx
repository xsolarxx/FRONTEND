import './CompanyCard.css';

import { useNavigate } from 'react-router-dom';

import { ScrollToTopButton } from '../../styles/Buttons/ScrollToTopButton';
import { LikeCompany } from '../LikeButtonCompany/LikeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from 'react-tooltip';
import { TopBar } from '../../layouts/TopBar';

<Tooltip id="my-tooltip" />;

export const CompanyCard = ({ company }) => {
  console.log('CompanyCard', company);
  const navigate = useNavigate();
  return (
    <>
      <div className="containerCompany">
        <img className="section-company__image" src={company.image} alt={company.name} />
        <div className="section-company__text">
          <h3 className="companyName">{company.companyName} </h3>

          <p className="tag">{company.companyType}</p>
          <p className="tag">{company.companyServices}</p>
          {/* <p className="companyDescription"> {company.description}</p> */}

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
    </>
  );
};
