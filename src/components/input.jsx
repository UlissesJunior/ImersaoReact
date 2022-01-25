import React from "react";

import SearchImg from '../img/lupa.png'


function input() {
    return(
        <div>
          <h1>Welcome to React Chat!</h1>
          <h2>The best chat, created with the help of Immersion React (Alura).</h2>
          <div className='input'>
            <input 
            className="add-note-input" 
            type="text" 
        />
              <div className='button'>
                <span>
                  <button className="button-click"><img src={SearchImg} /></button>
                </span>
              </div>
          </div>
        </div>
    )
}

export default input;