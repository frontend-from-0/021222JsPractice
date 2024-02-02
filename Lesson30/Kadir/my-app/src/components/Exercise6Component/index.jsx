import React from 'react';

// export const Exercise6Component = () => {
// const handleClick  = (event) => {
//   console.log(event);
//   event.preventDefault();
// }

//   return (<a href="https://www.google.com/" onClick = {handleClick}>link</a>)
// };

// KCS Extension

export const Exercise6Component2 = () => {
  const handleLinkClick = (event) => {
    console.log(event.target.href);
    event.preventDefault();
  };

  return (
    <div>
      <button><a href="https://www.google.com/" onClick={handleLinkClick}>
      Click me to visit Google!
    </a></button>
    </div>
  );
};
