import React, { useState } from "react";

const Exercise2Button = () => {
  const [label, setLabel] = useState("On");
  const handleClick = () => {
   setLabel(label==="On"?"Of":"On")
  };
  return <button onClick={handleClick}>{label}</button>;
};

export default Exercise2Button;
