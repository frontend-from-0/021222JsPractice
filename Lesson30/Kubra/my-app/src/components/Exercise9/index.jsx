import { useState } from "react";
import { Exercise9ColorButton } from "./Exercise9ColorButton";

export const Exercise9 = () => {
  const [background, setBackground] = useState("");

  const changeTheColor = (buttonColor) => {
    setBackground(buttonColor);
  };

  return (
    <div style={{ backgroundColor: background }}>
    <div>
      <h1>Change background color to: </h1>
      <Exercise9ColorButton 
        color="red" 
        onClick={() => changeTheColor("red")} />
      <Exercise9ColorButton
        color="green"
        onClick={() => changeTheColor("green")} />
      <Exercise9ColorButton
        color="blue"
        onClick={() => changeTheColor("blue")} />
      <Exercise9ColorButton
        color="yellow"
        onClick={() => changeTheColor("yellow")} />
    </div>
    </div>
  );
};