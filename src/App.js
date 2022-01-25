import './styles/app.css'
import SearchImg from './img/lupa.png'

function Homepage() {
  return (
    <>
      <div className="container">
        <div>
          <h1>Welcome to React Chat!</h1>
          <h2>The best chat, created with the help of Immersion React (Alura).</h2>
          <div className='input'>
            <input type="user"></input>
              <div className='button'>
                <span>
                  <button><img src={SearchImg} /></button>
                </span>
              </div>
          </div>
        </div>
      </div>
   </>
  );
}

export default Homepage;
