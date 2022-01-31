import React from "react";
import SendImg from "../img/send_button.png";

const Send = ({ handleNewMessage, message }) => {
  const ClickSend = (event) => {
    event.preventDefault();
    handleNewMessage(message);
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
