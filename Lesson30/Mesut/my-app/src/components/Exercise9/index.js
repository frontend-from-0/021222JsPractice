import React, { useState } from "react";



const Exercise9 = () => {
    const [color, setColor] = useState({ backgroundColor: "FFFFFF" });

    return (
        <div style={color}>
            <button onClick={() => { setColor({ backgroundColor: "#FF0000" }) }}>Red</button>
            <button onClick={() => { setColor({ backgroundColor: "#0000FF" }) }}>Blue</button>
            <button onClick={() => { setColor({ backgroundColor: "#FF0000" }) }}>Green</button>
        </div>
    )
};

export default Exercise9;
