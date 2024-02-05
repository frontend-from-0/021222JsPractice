export const Exercise10 = () => {
  function handleClick(event) {
    if (event.detail == 2) {
      alert("Double clicked!");
    }
  }
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};
