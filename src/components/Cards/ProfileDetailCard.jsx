import { FollowUserButton } from '../FollowButton/FollowUserButton';
// import './ProfileDetailCard.css';

export const ProfileDetailCard = ({ profileData }) => {
  return (
    <section className="user-side-pannel">
      <h3>
        <span
          style={{
            textDecoration: 'underline',
            textDecorationColor: '#97f85b',
            textDecorationThickness: '3px',
          }}
        >
          {profileData.userName}
        </span>
      </h3>
      <img className="dashboard-profile" src={profileData.image} alt="foto User" />
      <FollowUserButton id={profileData._id} />

      <hr className="dashboard_line" />

      <p className="pdash1" style={{ fontWeight: 'bold' }}>
        Companies summary
      </p>
      <p>Liked companies: {profileData?.likedCompany?.length}</p>
      <p> Companies Punctuated: {profileData.companyPunctuated.length}</p>
      {console.log('punctuated', profileData)}

      <p className="pdash2" style={{ fontWeight: 'bold' }}>
        Forum summary
      </p>

      <p>Liked Forum: {profileData?.likedForum?.length}</p>
      <p>Creader Forum: {profileData?.forumOwner?.length}</p>
      <p>Followed Forum: {profileData?.forumFollowing?.length}</p>

      <p style={{ fontWeight: 'bold' }}>Network Summary</p>

      <p>Following: {profileData?.usersFollowed?.length}</p>
      <p>Followers: {profileData?.usersFollowers?.length}</p>

      <p style={{ fontWeight: 'bold' }}>News Summary</p>
      <p>Liked News: {profileData?.likedNews?.length}</p>

      <p style={{ fontWeight: 'bold' }}>Comments Summary</p>
      <p>Liked favComments: {profileData?.usersFollowed?.length}</p>
      <p>My Comments: {profileData?.comments?.length}</p>
    </section>
  );
};
