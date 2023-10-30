import React from "react";
import Exercise7Button from "../Exercise7Child";

const Exercise7Parent = () => {
  function handleClick() {
    alert("you clicked parent element");
  }
  return (
    <div onClick={handleClick}>
      <Exercise7Button />
    </div>
  );
};

export default Exercise7Parent;
