import React, {useState} from 'react';

// export const Exercise1Button = () => {
//   const [label, setLabel] = useState('Button');

// function handleClick() {
//     setLabel('Clicked!');
// }
//     return (
//       <button onClick={handleClick}>{label}</button>
//     )
// }


// export const Exercise1Button2 = () => {
//   const [label, setLabel] = useState('Button 2');

//   return (
//       <button onClick={function () {setLabel('Clicked')} }>{label}</button>
//   )
// }

// KCS Extension
export const Exercise1Button = () => {
  const initialLabel = 'Button 1';
  const [label, setLabel] = useState(initialLabel);

  const handleClick = () => {
    const newLabel = label === initialLabel ? 'Clicked!' : initialLabel;
    setLabel(newLabel);
  };

  return (

    <button onClick={handleClick}>
      {label}
    </button>

  )
};
