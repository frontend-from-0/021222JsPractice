import "./styles.css";

export const ListItem = ({ id, title, completed, handleClick }) => {
  const handleCompletedToggle = () => {
    handleClick(id);
  };
  return (
    <li
      className={completed ? "completed" : null}
      // className={completed ? "completed" : null}
      // onClick={() => handleClick(id)}
      onClick={handleCompletedToggle}
    >
      {title}
    </li>
  );
};
