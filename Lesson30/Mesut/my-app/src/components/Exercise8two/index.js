import React from "react";
import "./style.css";

const Exercise8two = () => {
  const listItems = [
    { id: 1, context: "list item 1" },
    { id: 2, context: "list item 2" },
    { id: 3, context: "list item 3" },
    { id: 4, context: "list item 4" },
  ];

  return (
    <ul>
      {listItems.map((listItem) => {
        return (
          <li key={`list-item-${listItem.id}`} id={`list-item-${listItem.id}`}>
            {`${listItem.context}`}
            <button
              onClick={() => {
                document
                  .getElementById(`list-item-${listItem.id}`)
                  .classList.add("hide-list");
              }}
            >
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Exercise8two;
