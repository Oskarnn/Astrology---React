// import { signContext } from "./Horoscope";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";



const About = (props) => {


 
    
    return (
        <div className="contentBox">
            <Navbar/>
            <div className="aboutSection">
                <h2 className="aboutHead">ABOUT US</h2>
                <p>{ props.signText }</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic nobis autem nihil esse necessitatibus tempore ullam accusantium aperiam illum et, voluptatem quia debitis voluptatum alias culpa qui sint excepturi magnam maxime in, aliquid repudiandae. Voluptatum, soluta maxime, aliquam, nam suscipit doloremque modi dicta veritatis officia cupiditate iste. Ex aut voluptas saepe minima fuga corrupti labore dicta id, nesciunt hic doloribus? Maiores praesentium doloribus soluta ex, non consequuntur nam quos repellendus eveniet molestias explicabo libero reprehenderit aut quam at consectetur adipisci provident tempore illo. Voluptate hic ex deleniti accusantium provident harum.</p>
                
            </div>
            
        </div>
     );
}

export default About;
