import Navbar from "./Navbar";
import { useState } from 'react';
import React from "react";

// useEffect
const Horoscope = () => {

    const [signs, setSigns] = useState( [
        { id: 1, name: "Aries"},
        { id: 2, name: "Aries"},
        { id: 3, name: "Aries"},
    ]);

    return (
        <div className="contentBox">
            <Navbar/>
            <div className="horoSection">

                    {signs.map((sign) => (
                        <div className="horoList" key={sign.id}>
                            <p> { sign.name }</p>
                            <p> { sign.id }</p>
                        </div>
                    ))}


            </div>
        </div>
     );
}

export default Horoscope;
