import React, { useState } from "react";
import "./styles.css";
import { List } from "../List";

export const AddButton = ({ key}) => {
  const [text, setText] = useState("");
  const [newItem, setNewItem] = useState(); // Define a state to store the newItem

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    text.trim() !== "" &&
      setNewItem({
        key: key + 1,
        id: Math.floor(Math.random() * 1000),
        title: text,
        completed: false,
      });
    // handleAddItem(setNewItem);
    setText(""); // Clear the input field
  };

  const handleAddItem = (newItem) => {
    setData([...data, newItem]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-field"
        placeholder="Add new list item"
        value={text}
        onChange={handleChange}

      />
      <button type="submit" className="btn-submit" onClick={handleAddItem}>
        Submit
      </button>
    </form>
  );
};
