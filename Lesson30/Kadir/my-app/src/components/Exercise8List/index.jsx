import React, { useState } from "react";

export const Exercise8List = () => {

    const sourceList = ["Kadir",
    "Firat",
    "Kubra",
    "Ece",
    "Mesut"
    ];

    const handleList = () => {
        setItem(sourceList);  
    };

    const [item, setItem] = useState( sourceList );

    const handleClick = (i) => {
        setItem(
            item.filter((_item, index) => index !== i)
        )
    };

    return (
        <div>
            <button onClick={handleList()}>Show entire list</button>
            <ul>
                {item.map((_item, index) => (
                    <li key={index}>{_item}
                    <button onClick={() => handleClick(index)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}