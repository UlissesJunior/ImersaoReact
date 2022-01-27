import React from "react";

import SearchImg from '../img/lupa.png'


const input = ({ Github, user, handleinput}) => {

    return(
        <div>
          <h1>Welcome to React Chat!</h1>
          <h2>The best chat, created with the help of Immersion React (Alura).</h2>
          <div className='input'>
            <input 
            type="text" 
            value={user} 
            onChange={handleinput}
        />
              <div className='button'>
                <span>
                  <button><img src={SearchImg} alt="lupa"/></button>
                </span>
              </div>
          </div>
        </div>
    )
}

export default input;