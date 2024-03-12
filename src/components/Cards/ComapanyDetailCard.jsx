import './ComapanyDetailCard.css';

// el componente para mostrar todo el contenido
// sera importado en la CompanyDetail.jsx
export const CompanyDetailCard = ({ company }) => {
  return (
    <div className="containerCompanyDetailed">
      <img className="sectionCompanyImg" src={company.image} alt={company.name} />
      <div className="sectionCompanyText">
        <h3 className="sectionCompanyName"> {company.companyName} </h3>
        <p className="sectionCompanyDescription">{company.description}</p>
      </div>
      <p className="companyTypeDetailed"> Type: {company.type}</p>
      <p className="companyServicesDetailed">Services offered: {company.companyServices}</p>
    </div>
  );
};
