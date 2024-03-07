import './CompanyCard.css';

// el componente para mostrar todo el contenido
// sera importado en la CompanyDetail.jsx
export const CompanyDetailCard = ({ company }) => {
  return (
    <div className="containerCompany">
      <h3 className="companyName">Name: {company.companyName} </h3>
      <p className="companyDescription">description: {company.description}</p>
      <img className="imgCompany" src={company.image} alt={company.name} />
      <h2 className="companyType"> Type:{company.type}</h2>
      <p className="companyServices">Services offered:{company.companyServices}</p>
    </div>
  );
};
