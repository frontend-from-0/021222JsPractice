import React, { useState } from "react";
import "./styles.css";
import {List} from List;

export const AddButton = () => {
  const [text, setText] = useState("");
  const [newItem, setNewItem] = useState(null); // Define a state to store the newItem

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    text.trim() !== "" &&
      setNewItem({
        id: Math.floor(Math.random() * 1000),
        title: text,
        completed: false,
      });
    setText(""); // Clear the input field
  };

  return (
    <div>
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        className="input-field"
        placeholder="Add new list item"
        value={text}
        onChange={handleChange}
      />
      <button type="submit" className="btn-submit" >
        Submit
      </button>
    </form>
    {newItem && <List newItem={newItem} />}
    </div>
  );
};