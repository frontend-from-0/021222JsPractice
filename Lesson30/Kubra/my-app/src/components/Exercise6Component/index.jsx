export const Exercise6Component = () => {
const handleClick  = (event) => {
  console.log(event);
  event.preventDefault();
}

  return (<a href="https://www.google.com/" onClick = {handleClick}>link</a>)
};