import React, { useState } from "react";
import "./styles.css";

export const AddButton = ({ addItem, newItem }) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() !== "") {
      const newItem = {
        id: Math.floor(Math.random() * 1000), // Adjust the range as needed
        title: text,
        completed: false,
      };
      addItem(newItem); // Pass the new item to the parent component
      setText("");
    }
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