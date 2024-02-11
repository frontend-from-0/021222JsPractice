import { useState } from "react";

export const Exercise5 = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const handleClick = (event) => {
    const { clientX, clientY } = event;
    setCoordinates({ x: clientX, y: clientY });
  };
  return (
    <div>
      <button onClick={handleClick}>View Mouse Coordinates</button>
      <p>x coordinate: {coordinates.x}</p>
      <p>y coordinate: {coordinates.y}</p>
    </div>
  );
};
