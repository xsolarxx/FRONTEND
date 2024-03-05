import { useEffect, useState } from 'react';

import { getAllCompany } from '../../services/company.service';

export const CompanyPage = () => {
  const [companyList, setCompanyList] = useState([]);
  const fetchCompanies = async () => {
    setCompanyList(await getAllCompany());
  };
  useEffect(() => {
    fetchCompanies();
  }, []);
  //*antes de hacer el mapeo tenemos que ver si la longitd de la mapa es mayor que 0
  //* si no se va a rompero elmapeo , si es mayor que 0 pintamos las compañias
  //* Si es menor que 0 --> sin compañias que mostrar

  //* Verificar se a lista de empresas tem itens antes de mapeá-la
  if (companyList.data && companyList.data.length > 0) {
    return (
      <>
        {companyList.data.map((company) => (
          <div className="companyName" key={company.companyName}>
            <p className="companyDescription"> {company.description}</p>
            <img className="imgCompany" src={company.image} alt={company.name} />
            <h2 className="companyType"> {company.type}</h2>
            <p className="companyServices">{company.companyServices}</p>
          </div>
        ))}
      </>
    );
  } else {
    return <p>No companies to display</p>;
  }
};
