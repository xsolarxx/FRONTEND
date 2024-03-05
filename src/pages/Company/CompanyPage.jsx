import { useEffect, useState } from 'react';

import { getAllCompany } from '../../services/company.service';
import { CompanyCard } from '../../components';

export const CompanyPage = () => {
  const [companyList, setCompanyList] = useState();
  const fetchCompanies = async () => {
    setCompanyList(await getAllCompany());
  };
  useEffect(() => {
    fetchCompanies();
  }, []);
  //*antes de hacer el mapeo tenemos que ver si la longitd de la mapa es mayor que 0
  //* si no se va a rompero elmapeo , si es mayor que 0 pintamos las compañias
  //* Si es menor que 0 --> sin compañias que mostrar

  //* Verifica sí la lista tienes los itens para mapear

  return (
    <>
      {companyList &&
        companyList.data.map((company, index) => (
          <CompanyCard company={company} key={index} />
        ))}
    </>
  );
};
