import React from "react";
import { useState } from "react";

export const Exercise8 = () => {
  const [list, setList] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);

  const handleRemove = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={handleRemove}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
