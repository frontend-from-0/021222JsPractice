import React, {useState} from 'react';


export const Exercise9Multiple= () => {

  const changeBackgroundRed = () => {
    backgroundColor('red');
  }

    const changeBackgroundBlue = () => {
    backgroundColor('blue');
  }

    const changeBackgroundGray = () => {
    backgroundColor('gray');
  }

  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <button onClick={changeBackgroundRed}>Red Background</button>
      <button onClick={changeBackgroundBlue}>Blue Background</button>
      <button onClick={changeBackgroundGray}>Gray Background</button>
    </div>
  );
}