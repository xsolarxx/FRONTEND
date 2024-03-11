import './Dashboard.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DashboardList } from '../../components';
import { useAuth } from '../../context/authContext';
import { getByIdPopulate } from '../../services/user.service';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [userDashboard, setUserDashboard] = useState(null);
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

  return (
    <>
      <h2>My fav companies</h2>
      {userDashboard &&
        userDashboard.likedCompany?.map((item, index) => (
          <>
            <button
              className="button--blue"
              onClick={() => {
                navigate(`/CompanyDetail/${item._id}`);
              }}
            ></button>
            <DashboardList name={item.companyName} key={index} image={item.image} />
          </>
        ))}
      <h2>My fav Forums</h2>
      {userDashboard &&
        userDashboard.likedForum?.map((item, index) => (
          <>
            <button
              className="button--blue"
              onClick={() => {
                navigate(`/ForumDetail/${item._id}`);
              }}
            ></button>
            <DashboardList name={item.title} key={index} image={item.image} />
          </>
        ))}
      <h2>My fav News</h2>
      {userDashboard &&
        userDashboard.likedNews?.map((item, index) => (
          <>
            <button
              className="button--blue"
              onClick={() => {
                navigate(`/NewsDetail/${item._id}`);
              }}
            ></button>
            <DashboardList name={item.title} key={index} image={item.image} />
          </>
        ))}
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
      <h2>Forum Following</h2>
      {userDashboard &&
        userDashboard.forumFollowing?.map((item, index) => (
          <DashboardList name={item.title} key={index} image={item.image} />
        ))}
      <h2>My created Forums</h2>
      {userDashboard &&
        userDashboard.forumOwner?.map((item, index) => (
          <DashboardList name={item.title} key={index} image={item.image} />
        ))}
      <h2>My Liked comments</h2>
      {userDashboard &&
        userDashboard.favComments?.map((item, index) => (
          <DashboardList name={item.content} key={index} />
        ))}
      <h2>My comments</h2>
      {userDashboard &&
        userDashboard.comments?.map((item, index) => (
          <DashboardList name={item.content} key={index} />
        ))}
      {/* <h2>My Ratings to COMPANIES</h2>
      {userDashboard &&
        userDashboard.ownerRating?.map((item, index) => (
          <>
            <button
              className="button--blue"
              onClick={() => {
                navigate(`/CompanyDetail/${item._id}`);
              }}
            ></button>
            <DashboardList
              name={item.userPunctuation}
              companyName={item.companyPunctuated}
              key={index}
            />
          </>
        ))} */}
    </>
  );
};
