import { useState } from "react";

export const Exercise2 = () => {
  const [label, setLabel] = useState(false);

  return (
    <button
      onClick={function () {
        setLabel((prevLabel) => !prevLabel);
      }}
    >
      {label ? "On" : "Off"}
    </button>
  );
};
