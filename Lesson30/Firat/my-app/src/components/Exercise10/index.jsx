import React from "react";

export const Exercise10 = () => {
  return (
    <div>
      <button
        onDoubleClick={() => {
          alert("You clicked double!");
        }}
      >
        Click me!
      </button>
    </div>
  );
};
