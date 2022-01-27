import { useEffect, useState } from 'react';

import Input from './components/input';
import Profile from './components/profile';
import Banner from './components/banner';
import SearchImg from './img/lupa.png'

import './styles/app.css'

const Homepage = () => {
  const [ user, SetUser] = useState('UlissesJunior')
 
  function handleinput (event) {
    console.log(event.target.value)
    const InputValue = event.target.value;
    SetUser(InputValue);
    console.log(InputValue);
    // const NewGithub = fetch(`https://api.github.com/users/${user}`);
    // setGithub(NewGithub);
  }

  
//alterar isso aqui
//consumir a api dentro do use state do user
  const[ Github, setGithub ] = useState([])
  
  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
    .then(response => response.json())
    .then(data => setGithub(data))
    console.log(Github)
  }, [])

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
