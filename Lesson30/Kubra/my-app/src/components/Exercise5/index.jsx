import { useState } from "react";

export const Exercise5 = () => {
    const [location, setLocation] = useState('');

    const handleClick = (e) => {
        const {clientX, clientY} = e;
        setLocation({X: clientX, Y: clientY})
    }

    return (
        <div>
        <button onClick={handleClick}>What is my location right now?</button>
        <p>{location.X} , {location.Y}</p>
        </div>
    )
}