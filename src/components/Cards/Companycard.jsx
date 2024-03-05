import './CompanyCard.css';

export const CompanyCard = ({ company }) => {
  return (
    <div className="containerCompany">
      <h1 className="companyName">{company.companyName} </h1>
      <p className="companyDescription"> {company.description}</p>
      <img className="imgCompany" src={company.image} alt={company.name} />
      <h2 className="companyType"> {company.type}</h2>
      <p className="companyServices">{company.companyServices}</p>
    </div>
  );
};
