import React from "react";
import "./styles.css";

const Input = ({value, inputHandler}) => {




  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Take a note..."
        className="input"
        value={value}
        onChange={(e) => e.target.value}
        onKeyDown={(e)=>{if(e.key === "Enter"){ inputHandler()}}}
      />
      <button onClick={inputHandler}>Submit</button>
    </div>
  );
};

export default Input;
