import React from 'react';

export const Exercise10Double = () => {
  const handleDoubleClick = () => {
    alert('Button was double-clicked!');
  }

  return (
    <button onDoubleClick={handleDoubleClick}>Double Click Me</button>
  );
}