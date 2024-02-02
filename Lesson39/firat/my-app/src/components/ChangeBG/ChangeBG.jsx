import React, { useState } from "react";
import "./styles.css"; //

const ChangeBG = () => {
  const [backgroundColor, setBackgroundColor] = useState("");

  const handleGreenButtonClick = () => {
    setBackgroundColor("bg--green");
  };

  const handleRedButtonClick = () => {
    setBackgroundColor("bg--red");
  };

  return (
    <div className={`color-changer ${backgroundColor}`}>
      <button onClick={handleGreenButtonClick}>Change to Green</button>
      <button onClick={handleRedButtonClick}>Change to Red</button>
    </div>
  );
};

export default ChangeBG;
