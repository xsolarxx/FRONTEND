import { FollowUserButton } from '../FollowButton/FollowUserButton';
import './ProfileDetailCard.css';

import React from 'react';

export const ProfileDetailCard = ({ profileData }) => {
  return (
    <div className="profile-container">
      <section className="random-side-panel">
        <h3>{profileData.userName}</h3>
        <img
          className="random-image"
          src={profileData.image}
          alt={profileData.userName}
        />
        <p>{profileData.email}</p>
        <FollowUserButton id={profileData._id} />
      </section>

      <div className="random-main-pannel">
        <section className="random-pannel-section">
          <div className="randomList">
            <h3>Liked companies</h3>
            {profileData.likedCompany.map((company) => (
              <div key={company._id}>
                <img
                  className="randomList_icon"
                  src={company.image}
                  alt={company.companyName}
                />
                <p>{company.companyName}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="random-pannel-section">
          <div className="randomList">
            <h3>Liked news</h3>
            {profileData.likedNews.map((news) => (
              <div key={news._id}>
                <p>{news.title}</p>
                <p>{news.author}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="random-panel-section">
          <div className="randomList">
            <h3>Interested in this forums</h3>
            {profileData.forumFollowing.map((forum) => (
              <div key={forum._id}>
                <p>{forum.title}</p>
                <p>{forum.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
