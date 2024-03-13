import { NavLink } from 'react-router-dom';
import { DashboardList } from '../../components';

export const CompanyDas = ({ userDashboard }) => {
  return (
    <div className="otraCaja">
      <h2>My companies</h2>
      <h4>Liked companies</h4>

      <section className="user-pannel-section">
        {userDashboard && userDashboard.likedCompany ? (
          userDashboard.likedCompany.map((item, index) => (
            <NavLink to={`/CompanyDetail/${item._id}`} key={index}>
              <DashboardList
                name={item.companyName}
                image={item.image}
                email={item.email}
                key={index}
              />
            </NavLink>
          ))
        ) : (
          <p>No sigues ninguna compañia</p>
        )}
      </section>

      <h4>My rated companies</h4>
      <section className="user-pannel-section">
        {userDashboard?.companyPunctuated?.length ? (
          userDashboard.companyPunctuated.map((item, index) => (
            <NavLink to={`/CompanyDetail/${item._id}`} key={index}>
              <DashboardList name={item.companyName} image={item.image} key={index} />
            </NavLink>
          ))
        ) : (
          <p>No rated companies</p>
        )}
      </section>
    </div>
  );
};
