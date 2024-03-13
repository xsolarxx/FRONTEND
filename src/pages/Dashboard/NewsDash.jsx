import { NavLink } from 'react-router-dom';
import { DashboardList } from '../../components';

export const NewsDash = ({ userDashboard }) => {
  return (
    <div className="otraCaja">
      <h4>Liked News</h4>
      <section className="user-pannel-section">
        {userDashboard && userDashboard.likedNews
          ? userDashboard.likedNews.map((item, index) => (
              <NavLink to={`/NewsDetail/${item._id}`} key={index}>
                <DashboardList name={item.title} key={index} image={item.image} />
              </NavLink>
            ))
          : null}
      </section>
    </div>
  );
};
