import { useState } from 'react';

export const InputForm = (props) => {
  // Use state hook
  const [text, setText] = useState('Hello');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };
  
  return (
    <div>
      <h1>Input Form</h1>
      <input type="text" value={text} onChange={handleInputChange} />
      <p>Entered Text: {text}</p>
    </div>
  );
};
