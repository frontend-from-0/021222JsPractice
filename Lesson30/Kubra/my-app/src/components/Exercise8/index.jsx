import { useState } from "react";

const myList = ["First item of the list.",
"Second item of the list.",
"Third item of the list.",
"Last item of the list."
]

export const Exercise8 = () => {
    const [itemOfList, setItem] = useState( myList );

    const handleClick = (i) => {
        setItem(
            itemOfList.filter((item, index) => index !== i)
        )
    }


    return (
        <div>
            <ul>
                {itemOfList.map((item, index) => (
                    <li key={index}>{item}
                    <button onClick={() => handleClick(index)}>X</button>
                    </li>
                ))}
            </ul>
        </div>

    )
}