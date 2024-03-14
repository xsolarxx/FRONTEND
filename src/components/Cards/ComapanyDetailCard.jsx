import './ComapanyDetailCard.css';
import { RatingComponent } from '../Rating/RatingCompany';
import { LikeCompany } from '../LikeButtonCompany/LikeButton';
// el componente para mostrar todo el contenido
// sera importado en la CompanyDetail.jsx
//<p className="companyTypeDetailed"> Type: {company.type}</p>
//<p className="companyServicesDetailed">Services offered: {company.companyServices}</p>
export const CompanyDetailCard = ({ company }) => {
  console.log('detail', company);
  return (
    <div className="containerCompanyDetailed">
      <img className="sectionCompanyImg" src={company.image} alt={company.name} />
      <div className="sectionCompanyText">
        <h2 className="sectionCompanyName"> {company.companyName} </h2>
        <p
          className="sectionCompanyDescription"
          dangerouslySetInnerHTML={{ __html: company.description }}
        />
        <div className="companyContactDetails">
          <label className="companyPhone">
            Phone number:{' '}
            <a href={`tel:+34${company.phoneNumber}`}>
              <b>{company.phoneNumber}</b>
            </a>
          </label>
          <label className="companyEmail">
            Email address:{' '}
            <a href={`mailto:${company.email}`}>
              <b>{company.email}</b>
            </a>
          </label>
        </div>
      </div>
      <div className="companyTagsDetailed">
        <label className="companyTypeDetailed">Type: {company.companyType}</label>
        <label className="companyServicesDetailed">
          Services offered : {company.companyServices}
        </label>
      </div>
      <div className="ratingContainer">
        <h5>Rate this company:</h5>
        <RatingComponent company={company} />
      </div>
      <div>
        <LikeCompany id={company._id} />
      </div>
    </div>
  );
};
