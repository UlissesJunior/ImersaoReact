import React from "react";
import ReactLogo from "../img/react_logo.png";

export default function PageChat() {
  const back = () => {
    window.location.href='/ImersaoReact/';
}
  return (
    <>
      <div className="container-chat">
        <div className="nav">
          <a>Chat React</a>
          <img src={ReactLogo} alt="React Logo" />
          <a onClick={back}>Logout</a>
        </div>
      </div>
    </>
  );
}
