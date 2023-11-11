import './styles.css';

export const Exercise7 = () => {
    const handleParentClick = () => {
      console.log("This is parent zone!");
    };
  
    const handleChildClick = () => {
      console.log("This is child zone!");
    };
  
    return (
      <div class="box"
        onClick={handleParentClick}
      >
        <h2>Parent</h2>
        <div class="box"
          onClick={handleChildClick}
        >
          <h2>Child</h2>
        </div>
      </div>
    );
  };