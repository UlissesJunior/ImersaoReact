import React from 'react';
import ImgError from '../img/imgerror.png';

const Profile = ({ Github }) => {
    return (
        <div className='profile'>
          <h1>Your Profile</h1>
          <div className='img-profile'>
            <img src={Github.avatar_url || ImgError} alt="User Not Found"/>
          </div>
          <div className='img-content'>
              <h3>{Github.login || 'User Not Found'}</h3>
              <h2>{Github.followers} Followers</h2>
              <h2>{Github.following} Following</h2>
              <h2>{Github.public_repos} Repositories</h2>
          </div>
        </div>
    )
}

export default Profile;