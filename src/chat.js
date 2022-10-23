import React from "react";

import Sticker from "./components/sticker";
import Send from "./components/send";
import ImgError from "./img/imgerror.png";

// import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
// import { createClient } from "@supabase/supabase-js";

import ReactLogo from "./img/react_logo.png";

export default function PageChat({ Github }) {
  const history = useHistory();

  const handleClickBack = () => {
    history.goBack();
  };

  const [message, setMessage] = useState("");
  const [messagelist, setMessagelist] = useState([]);

  const TextType = (event) => {
    const value = event.target.value;
    setMessage(value);
  };

  function handleNewMessage(newMessage) {
    const message = {
      id: messagelist.length + 1,
      from: Github.login,
      text: newMessage,
    };
    setMessagelist([...messagelist, message]);
    setMessage("");
  }

  const TextEnter = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleNewMessage(message);
    }
  };

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
          <li>
            <div className="chat-card">
              <span>
                <button>
                  <img src={Github.avatar_url || ImgError} alt="user" />
                </button>
              </span>
              <div className="card-note">
                O banco de dados do projeto foi apagado!
              </div>
            </div>
          </li>
          {messagelist.map((mensagematual) => {
            return (
              <>
                <li key={mensagematual.id}>
                  <div className="chat-card">
                    <span>
                      <button>
                        <img src={Github.avatar_url || ImgError} alt="user" />
                      </button>
                    </span>
                    <div className="card-note">{mensagematual.text}</div>
                  </div>
                </li>
              </>
            );
          })}
        </div>
      </div>
      <div className="container-text">
        <div className="TextField">
          <input
            value={message}
            onChange={TextType}
            onKeyPress={TextEnter}
            placeholder="Insira sua mensagem aqui... "
            type="text"
          ></input>
          <Sticker />
          <Send handleNewMessage={handleNewMessage} message={message} />
        </div>
      </div>
    </>
  );
}
