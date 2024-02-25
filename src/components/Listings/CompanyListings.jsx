import { Companycard } from "../Cards/Companycard";

export const CompanyListings = ({ companies }) => {
  return (
    <div className="companyList">
      {companies.map((company) => (
        <Companycard key={company.id} company={company} />
      ))}
    </div>
  );
};
