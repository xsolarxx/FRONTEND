import './CompanyPage.css';
import { useEffect, useState } from 'react';
import { getAllCompany } from '../../services/company.service';
import { CompanyCard } from '../../components';
import { getByLikesCompany, getByDescLikesCompany } from '../../services/company.service';

export const CompanyPage = () => {
  const [companyList, setCompanyList] = useState(null);
  const [orderBy, setOrderBy] = useState(null);

  const fetchCompanies = async () => {
    let companies;
    if (orderBy === 'asc') {
      companies = await getByLikesCompany();
    } else if (orderBy === 'desc') {
      companies = await getByDescLikesCompany();
    } else {
      companies = await getAllCompany();
    }
    setCompanyList(companies);
  };

  useEffect(() => {
    fetchCompanies();
  }, [orderBy]);

  return (
    <section className="Company-Page-grid">
      <div className="filter-controls">
        <button
          onClick={() => setOrderBy('asc')}
          className={`button1 ${orderBy === 'asc' ? 'active' : ''} button--blue`}
        >
          Least Liked Companies
        </button>
        <button
          onClick={() => setOrderBy('desc')}
          className={`button2 ${orderBy === 'desc' ? 'active' : ''} button--blue`}
        >
          Most Liked Companies
        </button>
        <button
          onClick={() => setOrderBy(null)}
          className={`button3 ${!orderBy ? 'active' : ''} button--blue`}
        >
          No filter
        </button>
      </div>
      {companyList &&
        companyList.data.map((company, index) => (
          <CompanyCard company={company} key={index} />
        ))}
    </section>
  );
};
