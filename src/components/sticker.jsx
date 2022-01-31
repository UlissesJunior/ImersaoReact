import React, { useState } from "react";
import Sticker_button from "../img/sticker_button.png";

const Sticker = () => {
    const [isOpen, setOpenState] = useState();

    const handleClick = () => {
        return(
            <div className="box-sticker">
                <h1>oi</h1>
            </div>
        )
    }
  return (
    <div className="sticker">
        <span>
        <button onClick={handleClick}><img  src={Sticker_button} alt="sticker" /></button>
    </span>
    </div>
  );
};

export default Sticker;
