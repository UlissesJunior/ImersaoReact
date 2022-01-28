import React from "react";
import ReactLogo from "../img/react_logo.png";

export default function PageChat() {
  return (
    <>
      <div className="container-chat">
        <div className="nav">
          <h1>Chat React</h1>
          <img src={ReactLogo} alt="React Logo" />
          <h2>Logout</h2>
        </div>
      </div>
    </>
  );
}
