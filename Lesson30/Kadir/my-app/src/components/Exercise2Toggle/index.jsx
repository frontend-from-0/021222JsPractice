import React, {useState} from 'react';

export const Exercise2Toggle  = () => {

    const [click, setClick] = useState('On');
  
    const handleClick = () => {
      const newLabel = click === 'On' ? 'Off' : 'On';
      setClick(newLabel);
    };
  
    return (
      <button onClick={handleClick}>
        {click}
      </button>
    )
  };