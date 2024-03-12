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

  console.log('entro', user);
  const fetchUserData = async () => {
    const res = await getByIdPopulate(user?._id);
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
            {/* <h3>My fav companies</h3> <br></br> */}
            {userDashboard &&
              userDashboard.likedCompany?.map((item, index) => (
                <NavLink to={`/CompanyDetail/${item._id}`} key={index}>
                  <DashboardList
                    name={item.companyName}
                    image={item.image}
                    email={item.email}
                  />
                </NavLink>
              ))}
            {/* <h2>My Ratings</h2> */}
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
          </>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <div className="dashboard-conatiner">
        <section className="user-side-pannel">
          <h2>
            Hi {}
            <span
              style={{
                textDecoration: 'underline',
                textDecorationColor: '#97f85b',
                textDecorationThickness: '3px',
              }}
            >
              {user.name}
            </span>
          </h2>
          <img className="dashboard-profile" src={user.image} alt="foto User" />
          <p>{user.email}</p>
          <NavLink to="/profile">
            <p>Update Profile</p>
          </NavLink>
          <hr className="dashboard_line" />
          <h5>Liked companies: {user?.likedCompany?.length}</h5>
          <h5>Liked Forum: {user?.likedForum?.length}</h5>
          <h5>Liked News: {user?.likedNews?.length}</h5>
          <h5>Following: {user?.usersFollowed?.length}</h5>
          <h5>Followers: {user?.usersFollowers?.length}</h5>
          <h5>Creader Forum: {user?.forumOwner?.length}</h5>
          {/* <h5> Companies Punctuated: {user.companyPunctuated.length}</h5> */}
        </section>

        <section className="user-main-pannel">
          <div className="user-main-nav">
            <h3 onClick={() => handleTabChange('companies')}>My Companies</h3>
            <h3 onClick={() => handleTabChange('news')}>My News</h3>
            <h3 onClick={() => handleTabChange('forum')}>My Forum</h3>
            <h3 onClick={() => handleTabChange('My Network')}>My Network</h3>
          </div>
          <section className="user-pannel-section">{renderContent()}</section>
        </section>
      </div>
    </>
  );
};
