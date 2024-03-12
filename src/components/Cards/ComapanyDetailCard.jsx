import './ComapanyDetailCard.css';

// el componente para mostrar todo el contenido
// sera importado en la CompanyDetail.jsx
//<p className="companyTypeDetailed"> Type: {company.type}</p>
//<p className="companyServicesDetailed">Services offered: {company.companyServices}</p>
export const CompanyDetailCard = ({ company }) => {
  return (
    <div className="containerCompanyDetailed">
      <img className="sectionCompanyImg" src={company.image} alt={company.name} />
      <div className="sectionCompanyText">
        <h2 className="sectionCompanyName"> {company.companyName} </h2>
        <h4 className="sectionCompanyDescription">{company.description}</h4>
      </div>
      <div className="companyTagsDetailed">
        <p className="companyTypeDetailed">Type: {company.companyType}</p>
        <p className="companyServicesDetailed">Services offered : {company.companyServices}</p>
        <div className="companyContactDetails">
          <a href={`tel:+34${company.phoneNumber}`} className="companyPhone">
            {company.phoneNumber}
          </a>
          <a href={`mailto:${company.email}`} className="companyPhone">
            {company.email}
          </a>
        </div>
      </div>
    </div>
  );
};
