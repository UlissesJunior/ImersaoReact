import { useEffect, useState } from 'react';

import Input from './components/input';
import Profile from './components/profile';
import Banner from './components/banner';

import './styles/app.css'

const Homepage = () => {
  const [ user, SetUser] = useState('UlissesJunior')
 
  function handleinput (event) {
    console.log(event.target.value)
    const InputValue = event.target.value;
    SetUser(InputValue);
    console.log(InputValue);
  }

  const[ Github, setGithub ] = useState([])
  
  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
    .then(response => response.json())
    .then(data => setGithub(data))
    console.log(Github)
  }, [user])

  return (
    <>
      <div className="container">
        <div className='grid'>
          <Input Github={Github} user={user} handleinput={handleinput}/>
          <Profile Github={Github} />
        </div>
          <Banner/>
        </div>

        
   </>
  );
}

export default Homepage;
