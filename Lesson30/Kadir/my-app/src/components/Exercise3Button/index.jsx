import React, {useState} from 'react';


// export const Exercise3Button = () => {
//     const [counter, setCounter] = useState(0);
  
//   function handleClick() {
//       setCounter(counter+1);
//       // The pattern below is a safer approach to update the state and is especially usefuly for state updates that take longer time
//       // setCounter(prevState => prevState + 1);
//   }
//       return (
//         <button onClick={() => handleClick(counter)}>Button {counter}</button>
//       );
//   }

  // KCS Extension
export const Exercise3Button = () => {
    const [counter, setCounter] = useState(0);
  
    const handleClick = () => {
      setCounter(prevCounter => prevCounter + 1);
    };
  
    return (
      <button onClick={handleClick}>Button {counter}</button>
    );
  };
  