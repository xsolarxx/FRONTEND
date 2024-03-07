import './ComapanyDetailCard.css';

// el componente para mostrar todo el contenido
// sera importado en la CompanyDetail.jsx
export const CompanyDetailCard = ({ company }) => {
  return (
    <div className="containerCompany">
      <p className="companyName">Name: {company.companyName} </p>
      <p className="companyDescription">description: {company.description}</p>
      <img className="imgCompany" src={company.image} alt={company.name} />
      <h2 className="companyType"> Type:{company.type}</h2>
      <p className="companyServices">Services offered:{company.companyServices}</p>
    </div>
  );
};
