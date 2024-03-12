import './ProfileCard.css'

export ProfileDetail = ({user}) => {
    return (
      <div className="containerProfileDetailed">
        <img className="sectionProfileImg" src={user.image} alt={user.name} />
        <div className="sectionProfileText">
          <h2 className="sectionProfileName"> {user.profileName} </h2>
          <h4 className="sectionProfileDescription">{user.description}</h4>
        </div>
        <div className="profileTagsDetailed">
          <p className="profileTypeDetailed">Type: {user.profileType}</p>
          <p className="profileServicesDetailed">Services offered : {user.profileServices}</p>
          <div className="profileContactDetails">
            <a href={`tel:+34${user.phoneNumber}`} className="profilePhone">
              {user.phoneNumber}
            </a>
            <a href={`mailto:${user.email}`} className="profilePhone">
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    );
  };