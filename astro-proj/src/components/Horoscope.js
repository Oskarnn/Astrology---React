import Navbar from "./Navbar";
import { useState, useEffect, useContext } from 'react';
import React from "react";
import axios from 'axios';
import { BiArrowBack } from "react-icons/bi";



const Horoscope = (props) => {

    const [signs, setSigns] = useState([]);
    const [toggle, setToggle] = useState(true)
    const [info, setInfo] = useState(null)


    // const {signName, setSignName} = createContext(null)

    
    

   useEffect(() => {
    fetch()
   },[]) //  [] dependency array, gör så att useEffect kör funktioner vid första renderingen. (Bra för t.ex fetch)
//går att lägga in tex namn på variabler som gör att funktionen körs om värdet ändras i den variabeln.
  

function fetch() {
    axios.get('http://localhost:8000/data')
    .then(response => {
        setSigns(response.data)
        
    })
   }


function clickHandler(sign, index) {

    setInfo(sign);

   if(toggle === true) {


    // setSignName(index)


    props.newSignValue(index)
    setToggle(false)
    
   }
   else {
    setToggle(true)
   }

    
} 


    return (
        <div className="contentBox">
            <Navbar/>
            { toggle ?
            <>
            <h2>CHOOSE YOUR ZODIAC SIGN</h2>
                
                <div className="horoSection">
                        
                        { signs.map((sign, index) => (
                            <div className="horoList" key={sign.id}>
    
                                
                                <img src={ sign.pic } alt={sign.sign} />
                                <button onClick={ () => clickHandler(sign, index) }> { sign.sign }</button>
                                
                            </div>

                            )) }


                </div>
            </>
                :
                <div className="contentBox">
                    <BiArrowBack size={30} className="arrowIcon" onClick={clickHandler}/>
                    <div className="infoSection">
                        <div className="flexDiv">
                            <img className="infoPic" src={info.pic} alt="" />
                        </div>

                    <div className="flexDivContent">
                        <div className="flexStarsign">

                            <img className="infoStarpic" src={info.stars} alt="Star sign"/>
                            <h4>{info.sign.toUpperCase()}</h4>
                        </div>
                        <p>{ info.info }</p>
                     </div>
                     
                    
                    </div>
                    
                </div>
            }
        </div>
     );
}

export default Horoscope;



