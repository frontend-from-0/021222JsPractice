import React, { useState } from "react";

const BackgroundColorChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState("");

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="body" style={{ backgroundColor: backgroundColor }}>
      <h1>Background Color Changer</h1>
      <p>Click buttons to change background color!</p>
      <button onClick={() => changeBackgroundColor("green")}>Green</button>
      <button onClick={() => changeBackgroundColor("red")}>Red</button>
    </div>
  );
};

export default BackgroundColorChanger;
