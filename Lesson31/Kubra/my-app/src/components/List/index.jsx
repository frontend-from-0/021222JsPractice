import { ListItem } from "../ListItem";
import { useState } from "react";
import "./styles.css";
import { NewListItem } from "../NewListItem";

export const List = () => {
  const [data, setData] = useState([
    { id: 1, title: "Do dishes", completed: false },
    { id: 2, title: "Do homework", completed: true },
    { id: 3, title: "Go running", completed: false },
    { id: 4, title: "Do dishes 2", completed: false },
    { id: 5, title: "Do homework 3", completed: false },
    { id: 6, title: "Go running 4", completed: false },
  ]);

  const handleClick = (id) => {
    setData((prevData) => {
      return prevData.map((dataItem) =>
        dataItem.id === id
          ? { ...dataItem, completed: !dataItem.completed }
          : dataItem
      );
    });
  };

  const addNewItem = (text) => {
    setData([...data, { id: Date.now(), title: text, completed: false }]);
  };

  const deleteTodo = (id) => {
    setData(data.filter(todo => todo.id !== id));
  };

  const handleDelete = (id) => {
    setData(prevData => prevData.filter(todo => todo.id !== id));
  };

  return (
    <div>      
      <ul className="todo-list">
      <NewListItem addNewItem={addNewItem} />
        {data.map((listItem) => (
          <ListItem
            key={listItem.id}
            id={listItem.id}
            title={listItem.title}
            completed={listItem.completed}
            handleClick={handleClick}
            deleteTodo={deleteTodo}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};
