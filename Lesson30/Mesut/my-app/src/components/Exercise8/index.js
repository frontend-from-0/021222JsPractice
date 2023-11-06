import React, { useState } from "react";

// i tried make this exercise with usestate but i could'nt , i think i should use spread operator 
const Exercise8 = () => {
  const [listItems,setListItems] = useState ([
    { id: 1, context: "list item 1", visible: true },
    { id: 2, context: "list item 2", visible: true },
    { id: 3, context: "list item 3", visible: true },
    { id: 4, context: "list item 4", visible: true },
  ]);
function handleClick(){

}
  return (
    <ul>
      {listItems.map((listItem) => {
        return (listItem.visible?<li key={listItem.id}>{listItem.context}<button onClick={handleClick}>X</button></li>:null);
      })}
    </ul>
  );
};

export default Exercise8;
