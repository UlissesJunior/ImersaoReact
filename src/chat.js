import React from "react";

import Sticker from "./components/sticker";
import Send from "./components/send";

import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

import ReactLogo from "./img/react_logo.png";

export default function PageChat({ Github }) {
  const history = useHistory();

  const handleClickBack = () => {
    history.goBack();
  };

  const SUPABASE_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzU3NTU0NywiZXhwIjoxOTU5MTUxNTQ3fQ.jawAD_4vKGPTeHjokNMLgo6QfZuB20NXJyq4bgubZTc";
  const SUPABASE_URL = "https://lkayymgxskqfhgadypqm.supabase.co";
  const supabaseclient = createClient(SUPABASE_URL, SUPABASE_KEY);

  const [message, setMessage] = useState("");
  const [messagelist, setMessagelist] = useState([]);

  useEffect(() => {
    supabaseclient
      .from("messages")
      .select("*")
      .then(({ data }) => {
        setMessagelist(data);
      });
  }, [messagelist, supabaseclient]);

  const TextType = (event) => {
    const value = event.target.value;
    setMessage(value);
    console.log(message);
  };

  function handleNewMessage(newMessage) {
    const message = {
      // id: messagelist.length + 1,
      from: Github.login,
      text: newMessage,
    };
        // setMessagelist([...messagelist, message]);
        // setMessage("");
    supabaseclient
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

  const lixeira = () => {
    supabaseclient
      .from("messages")
      .delete()
      .match({ id: message.id })
      .then(() => {
        let indice = messagelist.indexOf(message);
        messagelist.splice(indice, 1)
        setMessagelist([...messagelist])
      });
      console.log("oi")
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
            return (
              <>
                <li key={mensagematual.id}>
                  <div className="chat-card">
                    <span>
                   <button onClick={lixeira}><img onclick={lixeira} src={Github.avatar_url} alt="user" /></button>
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
          <Sticker/>
          <Send handleNewMessage={handleNewMessage} message={message}/>
        </div>
      </div>
    </>
  );
}
