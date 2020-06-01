import React from 'react';

import './UserProfile.scss';

const UserProfile = ({ avatar, name, username }) => {
  return (
    <section className="profile" data-testid="user-profile">
      <div className="container">
        <div className="profile-data">
          <div className="user">
            <div className="user__thumber">
              {avatar
                ? <img src={avatar} alt={name} />
                : <img src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png" alt="" />
              }
            </div>

            <p className="user__name">
              {name}
              <span>@{username}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default UserProfile;
