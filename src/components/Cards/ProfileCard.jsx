import './CompanyCard.css';

import { useNavigate } from 'react-router-dom';

import { ScrollToTopButton } from '../Buttons/ScrollToTopButton';
import { RatingComponent } from '../Rating/RatingCompany';
import { LikeCompany } from '../LikeButtonCompany/LikeButton';

export const CompanyCard = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div className="containerCompany">
      <img className="section-user__image" src={user.image} alt={user.name} />
      <div className="section-company__text">
        <h3 className="companyName">{user.companyName} </h3>
        <p className="companyDescription"> {user.description}</p>
        <div className="user-tags">
          <p className="companyType">{user.gender}</p>
          <p className="companyServices">{user.companyServices}</p>
          <a href={`tel:+34${user.phoneNumber}`} className="companyPhone">
            {user.phoneNumber}
          </a>
          <a href={`mailto:${user.email}`} className="companyPhone">
            {user.email}
          </a>
          <br />
          <LikeCompany id={user._id} />
          <RatingComponent companyId={user._id} /> <br />
          <button
            className="button--blue"
            onClick={() => {
              navigate(`/companyDetail/${user._id}`);
            }}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};