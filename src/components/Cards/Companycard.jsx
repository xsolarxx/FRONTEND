export const CompanyCard = ({ company }) =>
  //     {
  //   userCompanyRatings,
  //   userCompanyReviews,
  //   userLikedCompany,
  //   likesCount,}
  {
    const { id, companyName, description, companyType, companyServices, image } = company;

    return (
      <div className="company-card">
        <img src={image} alt={companyName} className="company-card-img" />
        <div className="companyCardInfo">
          <h2>
            {companyName}, {id}
          </h2>
          <h3>{companyServices}</h3>
          <p>{description}</p>
          <p>{companyType}</p>
        </div>
      </div>
    );
  };
