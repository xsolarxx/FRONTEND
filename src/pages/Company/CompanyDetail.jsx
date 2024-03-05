// import { useEffect, useState } from "react";
import { CompanyListings } from '../../components/Listings/CompanyListings';
import { companies } from '../../data/mockCompanyData';

export const Company = () => {
  //   const [companies, setCompanies] = useState([]);
  //   useEffect(() => {
  //     fetchCompanies();
  //   }, []);
  // };

  // const fetchCompanies = async () => {
  //   try {
  //     const response = await fetch("/api/companies");
  //     const data = await response.json();
  //     setCompanies(data);
  //   } catch (error) {
  //     console.error("Error fetching companies:", error);
  //   }

  return (
    <div>
      <h1> Company Page </h1>
      <CompanyListings>{companies}</CompanyListings>{' '}
    </div>
  );
};
