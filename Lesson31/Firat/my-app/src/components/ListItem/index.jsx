import "./styles.css";

export const ListItem = ({
  id,
  title,
  completed,
  handleClick,
  handleDelete,
}) => (
  <li
    className={completed ? "completed" : null}
    onClick={() => handleClick(id)}
  >
    {title}
    <button className="deletebtn" onClick={() => handleDelete(id)}>
      Delete
    </button>
  </li>
);
