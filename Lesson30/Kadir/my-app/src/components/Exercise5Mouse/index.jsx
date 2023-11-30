import React, {useState} from 'react';
import './styles.css';


export const Exercise5Mouse = () => {

    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

//     const handleMouseMove = (e) => {
//       setCoordinates({ x: e.clientX, y: e.clientY });
//     };
  
//     return (
//       <div onClick={handleMouseMove}>
//         <h1>Get Mouse Coordinates</h1>
//         <p>X: {coordinates.x}</p>
//         <p>Y: {coordinates.y}</p>
//       </div>
//     );
// };

    const [isOpen, setIsOpen] = useState(false);
  
    const togglePopUp = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div onClick={togglePopUp}>
        {isOpen && 
        {function (e) {setCoordinates({ x: e.clientX, y: e.clientY })}}&&(
          <div className="pop-up">
            <h2>Pop-Up Box</h2>
            <p>X: {coordinates.x} | Y: {coordinates.y}</p>
          </div>
        )}
      </div>
    );
  };
  
//   onChange={handleMouseMove = (e) => {setCoordinates({ x: e.clientX, y: e.clientY })}}
  
