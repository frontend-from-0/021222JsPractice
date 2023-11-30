import React from 'react';

export const Exercise7Event = () => {
  const handleParentClick = () => {
    alert('Parent element clicked');
  }

  const handleChildClick = () => {
    alert('Child element clicked');
  }

    return (
      <div className="pop-up" onClick={handleParentClick}>
        <p onClick={handleChildClick}>Child Element</p>
      </div>
    );
  }

  // they appear in a row everytime
