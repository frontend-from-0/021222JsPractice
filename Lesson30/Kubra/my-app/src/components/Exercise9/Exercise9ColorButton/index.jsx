import './styles.css';

export const Exercise9ColorButton = ({ color, onClick }) => {
    return (
      <button
        class="color-btn"
        style={{ backgroundColor: color }}
        onClick={onClick}
      ></button>
    );
  }
  