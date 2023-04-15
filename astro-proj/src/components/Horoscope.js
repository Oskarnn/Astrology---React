import Navbar from "./Navbar";
import { useState, useEffect } from 'react';
import React from "react";
import axios from 'axios';

// useEffect
const Horoscope = () => {

    const [signs, setSigns] = useState([]);

   useEffect(() => {
    fetch()
   },[]) //  [] dependency array, gör så att useEffect kör funktioner vid första renderingen. (Bra för t.ex fetch)
//går att lägga in tex namn på variabler som gör att funktionen körs om värdet ändras i den variabeln.
  

function fetch() {
    axios.get('http://localhost:8000/data')
    .then(response => {
        setSigns(response.data)
        console.log(signs[1].pic)
    })
   }

   let toggle = false;

    return (
        <div className="contentBox">
            <Navbar/>
            <div className="horoSection">

                    { signs.map((sign) => (
                        <div className="horoList" key={sign.id}>
                            
                            <img src={ sign.pic } alt={sign.sign} />
                            <button onClick={ () => toggle = true }> { sign.sign }</button>
                        </div>

                        )) }


            </div>
        </div>
     );
}

export default Horoscope;
