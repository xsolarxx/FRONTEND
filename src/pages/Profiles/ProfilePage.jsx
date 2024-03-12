import './ProfilePage.css';
import { useEffect, useState } from 'react';
import { ProfileCard } from '../../components';
import { getByLikesCompany, getByDescLikesCompany } from '../../services/company.service';


export const ProfilePage = () => {
  const [profileList, setProfileList] = useState(null);
  const [orderBy, setOrderBy] = useState(null);

  const fetchProfiles = async () => {
    let profiles;
    if (orderBy === 'asc') {
      profiles = await getByLikesCompany();
    } else if (orderBy === 'desc') {
      profiles = await getByDescLikesCompany();
    } else {
      profiles = await getAllCompany();
    }
    setProfileList(profiles);
  };

  useEffect(() => {
    fetchProfiles();
  }, [orderBy]);

  return (
    <section className="Profile-Page-grid">
      <div className="filter-controls">
        <button
          onClick={() => setOrderBy('asc')}
          className={`button ${orderBy === 'asc' ? 'active' : ''} button--blue`}
        >
          Least Liked Companies
        </button>
        <button
          onClick={() => setOrderBy('desc')}
          className={`button ${orderBy === 'desc' ? 'active' : ''} button--blue`}
        >
          Most Liked Companies
        </button>
        <button
          onClick={() => setOrderBy(null)}
          className={`button ${!orderBy ? 'active' : ''} button--blue`}
        >
          Sin filtro
        </button>
      </div>
      {profileList &&
        profileList.data.map((profile, index) => (
          <ProfileCard profile={profile} key={index} />
        ))}
    </section>
  );
};
