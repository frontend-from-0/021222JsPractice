import React, { useState } from "react";
import "./styles.css";

export const NewTodoForm = ({ key, data, setData}) => {

  const [newItem, setNewItem] = useState(""); // Define a state to store the newItem

  const handleChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedText = newItem.trim();  
    trimmedText !== "" && 
      setNewItem({
        id:Date.now(),
        title: trimmedText,
        completed: false,
      });
      setNewItem(""); // Clear the input field
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
      <button type="submit" className="btn-submit">
        Submit
      </button>
    </form>
  );
};
