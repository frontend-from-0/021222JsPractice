import './styles.css';

export const ListItem = ({id, title, completed, handleClick, handleDelete}) => 
 ( <li
  className={completed ? "completed" : null}
  onClick={() => handleClick(id)}
>{title}
<button 
onClick={() => handleDelete(id)}>X</button>
</li>);

