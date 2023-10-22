import { useState } from "react";

const itemsOfList = ["First item of the list.",
"Second item of the list.",
"Third item of the list.",
"Last item of the list."
]

export const Exercise4 = () => {
    const [items, setListItem] = useState( itemsOfList );


    return (
<div>
<h1>List of items</h1>
<ul>{items.map((item, index) => (
       <li key={index} onClick={() => alert(`This is the ${item}`)}>{item}</li>
    )) 
    }</ul>
</div>
    )
}
