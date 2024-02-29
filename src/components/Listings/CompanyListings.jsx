import { CompanyCard } from '../Cards/Companycard';

export const CompanyListings = ({ companies }) => {
  return (
    <div className="companyList">
      {companies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  );
};
