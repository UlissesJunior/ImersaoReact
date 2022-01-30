import React from "react";
import { useState } from "react";
import { useHistory } from 'react-router-dom';

// import Message from './components/message'

import ReactLogo from "./img/react_logo.png";

// import Message from './components/message'

export default function PageChat({ Github }) {
  const history = useHistory();

  const handleClickBack = () => {
    history.goBack();
  }

  const [message, setMessage] = useState('');
  const [messagelist, setMessagelist] = useState([]);

  const TextType = (event) => {
    const value = event.target.value;
    setMessage(value);
    console.log(message)
  }

  function handleNewMessage (newMessage) {
    const message = {
      id: messagelist.length + 1,
      from: Github.login,
      text: newMessage
    }
    setMessagelist([
      ...messagelist, message
    ]);
    setMessage('');
  }
  

  const TextEnter = (event) => {
    if(event.key === "Enter") {
      event.preventDefault();
      handleNewMessage(message);
    }
  }

  return (
    <>
      <div className="container-nav">
        <div className="nav">
          <h1>Chat React</h1>
          <img src={ReactLogo} alt="React Logo" />
          <h2 onClick={handleClickBack}>Logout</h2>
        </div>
      </div>
      <div className="container-chat">
        <div>
          {messagelist.map((mensagematual) => {
            return(
              <li key={mensagematual.id}><h1>{mensagematual.from}: {mensagematual.text}</h1></li>
            )
          })}
          {/* <Message messagelist={messagelist}/> */}
        </div>
        
        <div className="TextField">
          <input value={message} onChange={TextType} onKeyPress={TextEnter} placeholder="Insira sua mensagem aqui... " type="text"></input>
        </div>
      </div>
    </>
  );
  
}
