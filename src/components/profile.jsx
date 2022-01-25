import React from 'react';
import { useEffect, useState } from 'react';

function Profile() {

    const[ Github, setGithub ] = useState([])

    useEffect(() => {
      fetch('https://api.github.com/users/UlissesJunior')
      .then(response => response.json())
      .then(data => setGithub(data))
    }, [])

    return(
        <div className='profile'>
          <h1>Your Profile</h1>
          
          <div className='img-profile'>
            <img src={Github.avatar_url} alt='avatar' />
          </div>
          <div className='img-content'>
              <h3>{Github.login}</h3>
              <h2>{Github.followers} Followers</h2>
              <h2>{Github.following} Following</h2>
              <h2>{Github.public_repos} Repositories</h2>
              {console.log(Github)}
          </div>
        </div>
    )
}

export default Profile;