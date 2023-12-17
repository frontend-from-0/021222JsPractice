import React, { useState } from "react";
import { ListItem } from "../ListItem";
import { AddButton } from "../AddButton";
import "./styles.css";

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
    setData((prevData) =>
      prevData.map((dataItem) =>
        dataItem.id === id
          ? { ...dataItem, completed: !dataItem.completed }
          : dataItem
      )
    );
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((dataItem) => dataItem.id !== id));
  };

  // const handleAddItem = (newItem) => {
  //   setData([...data, newItem]);
  // };

  return (
    <div>
      <ul className="todo-list">
        {data.map((listItem) => (
          <ListItem
            key={listItem.id}
            id={listItem.id}
            title={listItem.title}
            completed={listItem.completed}
            handleClick={handleClick}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
      <AddButton key={data.id} setData={setData} data={data}/>
    </div>
  );
};