import { useState } from "react";

export const Exercise2Button = () => {
    const [label, setLabel] = useState('On');

    function handleClick() {
         setLabel((state) => (state === "On" ? "Off" : "On") );
    }


    return (
        <button onClick={handleClick}>{label}</button>
    )
}