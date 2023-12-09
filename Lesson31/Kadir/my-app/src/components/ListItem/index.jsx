import './styles.css';

export const ListItem = ({id, title, completed, handleClick, handleDelete}) => 
  <li
      className={completed ? "completed" : null}
      onClick={() => handleClick(id)}

    >{title}<span className="delete" onClick={() => handleDelete(id)}>X</span></li>;

