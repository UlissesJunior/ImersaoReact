import React from "react";
import ReactLogo from "./img/react_logo.png";
import { useHistory } from 'react-router-dom';

export default function PageChat() {
  const history = useHistory();

  const handleClickBack = () => {
    history.goBack();
  }
  return (
    <>
      <div className="container-chat">
        <div className="nav">
          <h1>Chat React</h1>
          <img  src={ReactLogo} alt="React Logo" />
          <h2 onClick={handleClickBack}>Logout</h2>
        </div>
      </div>
    </>
  );
}
