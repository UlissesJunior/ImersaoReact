import Input from './components/input';
import Profile from './components/profile';
import Banner from './components/banner';



import './styles/app.css'



function Homepage() {

 
  return (
    <>
      <div className="container">
        <div className='grid'>
          <Input/>
          <Profile/>
        </div>
          <Banner/>
        </div>

        
   </>
  );
}

export default Homepage;
