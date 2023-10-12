import { useState } from "react";

export const Exercise4 = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  return (
    <div>
      <h1>List of Items</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => alert(`You clicked on: ${item}`)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
