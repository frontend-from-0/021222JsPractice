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
      <button
        data-testid="change-green-button"
        onClick={handleGreenButtonClick}
      >
        Change to Green
      </button>
      <button data-testid="change-red-button" onClick={handleRedButtonClick}>
        Change to Red
      </button>
    </div>
  );
};

export default ChangeBG;
