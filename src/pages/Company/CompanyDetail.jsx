import './CompanyPage.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CompanyDetailCard } from '../../components/Cards/ComapanyDetailCard';
import { getByIdCompany } from '../../services/company.service';

export const CompanyDetail = () => {
  const { id } = useParams();
  const [fullCompany, setfullCompany] = useState(); // estado de la cia
  console.log(fullCompany);
  const fetchFullCompanies = async () => {
    setfullCompany(await getByIdCompany(id));
  };
  useEffect(() => {
    fetchFullCompanies();
  }, []);
  //*antes de hacer el mapeo tenemos que ver si la longitd de la mapa es mayor que 0
  //* si no se va a rompero elmapeo , si es mayor que 0 pintamos las compañias
  //* Si es menor que 0 --> sin compañias que mostrar

  //* Verifica sí la lista tienes los itens para mapear

  return (
    <div>{fullCompany?.data && <CompanyDetailCard company={fullCompany.data} />}</div>
  );
};
