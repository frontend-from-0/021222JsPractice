import './styles.css';

export const ListItem = ({id, title, completed, handleClick}) => 
  <li
      className={completed ? "completed" : null}
      onClick={() => handleClick(id)}

    >{title}</li>;

