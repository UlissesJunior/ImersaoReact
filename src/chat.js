import React from "react";

import Sticker from "./components/sticker";
import Send from "./components/send";
import ImgError from "./img/imgerror.png";

import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { supabase } from "../src/client/supabaseClient";

import ReactLogo from "./img/react_logo.png";

export default function PageChat({ Github }) {
  const history = useHistory();

  const handleClickBack = () => {
    history.goBack();
  };

  const [message, setMessage] = useState("");
  const [messagelist, setMessagelist] = useState([]);

  useEffect(() => {
    supabase
      .from("messages")
      .select("*")
      .then(({ data }) => {
        setMessagelist(data);
      });
  }, []);

  const TextType = (event) => {
    const value = event.target.value;
    setMessage(value);
    // console.log(message);
  };

  async function handleNewMessage(newMessage) {
    const message = {
      from: Github.login,
      text: newMessage,
    };
    supabase
      .from("messages")
      .insert([message])
      .then((data) => {
        setMessagelist([...messagelist, data[0]]);
        setMessage("");
      });
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
          {messagelist.map((mensagematual) => {
            return (
              <>
                <li key={mensagematual.id}>
                  <div className="chat-card">
                    <span>
                      <img src={Github.avatar_url || ImgError} alt="user" />
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
