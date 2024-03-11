import './Dashboard.css';

import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { DashboardList } from '../../components';
import { useAuth } from '../../context/authContext';
import { getByIdPopulate } from '../../services/user.service';

export const Dashboard = () => {
  const { user } = useAuth();
  const [userDashboard, setUserDashboard] = useState(null);
  const [activeTab, setActiveTab] = useState('companies');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // console.log('entro', user);
  const fetchUserData = async () => {
    const res = await getByIdPopulate(user._id);
    setUserDashboard(res.data);
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  // userDashboard?.item.map((item) => {
  //   console.log('entreooo', item);
  // });

  const renderContent = () => {
    switch (activeTab) {
      case 'companies':
        return (
          <>
            <h2>My fav companies</h2>
            {userDashboard &&
              userDashboard.likedCompany?.map((item, index) => (
                <NavLink to={`/CompanyDetail/${item._id}`} key={index}>
                  <DashboardList name={item.companyName} image={item.image} />
                </NavLink>
              ))}
            <h2>My Ratings to COMPANIES</h2>
            {userDashboard &&
              userDashboard.ownerRating?.map((item, index) => (
                <NavLink to={`/CompanyDetail/${item._id}`} key={index}>
                  <DashboardList
                    name={item.userPunctuation}
                    companyName={item.companyPunctuated}
                    key={index}
                  />
                </NavLink>
              ))}
          </>
        );
      case 'news':
        return (
          <>
            <h2>My fav News</h2>
            {userDashboard &&
              userDashboard.likedNews?.map((item, index) => (
                <NavLink to={`/NewsDetail/${item._id}`} key={index}>
                  <DashboardList name={item.title} image={item.image} />
                </NavLink>
              ))}
          </>
        );
      case 'Forum':
        return (
          <>
            <h2>My created Forums</h2>
            {userDashboard &&
              userDashboard.forumOwner?.map((item, index) => (
                <DashboardList
                  name={item.title}
                  image={item.image}
                  content={item.content}
                  key={index}
                />
              ))}
          </>
        );
      case 'My Network':
        return (
          <>
            <h2>Following</h2>
            {userDashboard &&
              userDashboard.usersFollowed?.map((item, index) => (
                <DashboardList name={item.userName} key={index} image={item.image} />
              ))}
            <h2>Followers</h2>
            {userDashboard &&
              userDashboard.usersFollowers?.map((item, index) => (
                <DashboardList name={item.userName} key={index} image={item.image} />
              ))}
            <h2>My fav Forums</h2>
            {userDashboard &&
              userDashboard.likedForum?.map((item, index) => (
                <NavLink to={`/ForumDetail/${item._id}`} key={index}>
                  <DashboardList name={item.title} key={index} image={item.image} />
                </NavLink>
              ))}
            <h2>Forum Following</h2>
            {userDashboard &&
              userDashboard.forumFollowing?.map((item, index) => (
                <DashboardList name={item.title} key={index} image={item.image} />
              ))}
          </>
        );
      default:
        return null;
    }
  };
  return (
    <div>
      <h1>User Dashboard</h1>
      <div>
        <button onClick={() => handleTabChange('companies')}>Companies</button>
        <button onClick={() => handleTabChange('news')}>News</button>
        <button onClick={() => handleTabChange('forum')}>Forum</button>
      </div>
      {renderContent()}
    </div>
  );
};
