import React, {useState} from 'react';

export const Exercise5Mouse = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCoordinates({ x: e.screenX, y: e.screenY });
  };

  return (
    <button onClick={handleMouseMove}>
          <h3>Mouse Coordinates</h3>
          <p>X: {coordinates.x} | Y: {coordinates.y}</p>
    </button>
  );
};


//couldn't complete below

// import React, {useState} from 'react';
// import './styles.css';

// export const Exercise5Mouse = () => {
//   const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
//   const [isOpen, setIsOpen] = useState(false);

//   const togglePopUp = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleMouseMove = (e) => {
//     setCoordinates({ x: e.screenX, y: e.screenY });
//   };

//   return (
//     <div onClick={togglePopUp}>
//       {isOpen && (
//         <div className="pop-up" onMouseMove={handleMouseMove}>
//           <h2>Pop-Up Box</h2>
//           <p>X: {coordinates.x} | Y: {coordinates.y}</p>
//         </div>
//       )}
//     </div>
//   );
// };

