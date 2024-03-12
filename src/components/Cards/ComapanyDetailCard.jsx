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
        <div className="companyContactDetails">
          <label className="companyPhone">
            <a href={`tel:+34${company.phoneNumber}`}>
              Phone number: {company.phoneNumber}
            </a>
          </label>
          <label className="companyEmail">
            <a href={`mailto:${company.email}`}>Email address: {company.email}</a>
          </label>
        </div>
      </div>
      <div className="companyTagsDetailed">
        <label className="companyTypeDetailed">Type: {company.companyType}</label>
        <label className="companyServicesDetailed">
          Services offered : {company.companyServices}
        </label>
      </div>
    </div>
  );
};
