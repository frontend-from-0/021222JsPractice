import {useState} from 'react';

export const Exercise1Button = () => {
  const [label, setLabel] = useState('Button');

function handleClick() {
    setLabel('Clicked!');
}
    return (
      <button onClick={handleClick}>{label}</button>
    )
}


export const Exercise1Button2 = () => {
  const [label, setLabel] = useState('Button 3');

  return (
      <button onClick={function () {setLabel('Clicked')} }>{label}</button>
  )
};