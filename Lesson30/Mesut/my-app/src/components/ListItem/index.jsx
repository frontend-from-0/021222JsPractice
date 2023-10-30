import "./styles.css";

// export const ListItem = (props) => <li>{props.title}</li>;

export const ListItem = ({ title }) => {
  function handleClick() {
    alert(title);
  }
  return <li onClick={handleClick}>{title}</li>;
};
