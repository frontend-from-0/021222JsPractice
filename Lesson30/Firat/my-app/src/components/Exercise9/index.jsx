import React, { useState } from "react";

export const Exercise9 = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div
      style={{
        backgroundColor,
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <button onClick={() => handleColorChange("red")}>Red</button>
        <button onClick={() => handleColorChange("green")}>Green</button>
        <button onClick={() => handleColorChange("yellow")}>Yellow</button>
        <button onClick={() => handleColorChange("blue")}>Blue</button>
      </div>
    </div>
  );
};
