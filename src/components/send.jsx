import React from "react";
import SendImg from "../img/send_button.png";
import { useHistory } from "react-router-dom";

const Send = ({ handleNewMessage, message }) => {
  const history = useHistory();
  const ClickSend = (event) => { 
    event.preventDefault();
    handleNewMessage(message);
    history.push("/chat/");
    history.goBack();
  };
  return (
    <div className="button-send">
      <span>
        <button onClick={ClickSend}>
          <img src={SendImg} alt="send" />
        </button>
      </span>
    </div>
  );
};
export default Send;
