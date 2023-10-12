import "./styles.css";
import { useState } from "react";

export const NewItem = ({ handleAddItem }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      handleAddItem(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="newItemInput"
        type="text"
        placeholder="Enter a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
