import React from "react";

export const Exercise7 = () => {
  const handleParentClick = () => {
    console.log("Parent clicked!");
  };

  const handleChildClick = (event) => {
    event.stopPropagation();
    console.log("Child clicked!");
  };

  return (
    <div
      onClick={handleParentClick}
      style={{ border: "2px solid blue", padding: "10px" }}
    >
      <h2>Parent</h2>
      <div
        onClick={handleChildClick}
        style={{ border: "2px solid red", padding: "10px" }}
      >
        <h3>Child</h3>
      </div>
    </div>
  );
};
