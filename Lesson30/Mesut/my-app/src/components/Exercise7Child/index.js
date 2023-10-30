import React from "react";

const Exercise7Button = () => {
  function handleClick() {
    alert("You clicked child element");
  }
  return <button onClick={handleClick}>Click Me!</button>;
};

export default Exercise7Button;
