import Home from './components/Home';
import Horoscope from './components/Horoscope';
import About from './components/About';
import './index.css';
import { useState, createContext, useContext } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


 export const context = createContext("WELCOME TO THE WORLD OF THE UNKNOWN");

// import { signContext } from './components/Horoscope';



function App() {

 
    const [signProp, setSignProp] = useState(null);


    const text  = useContext(context);
  
    // function handleName(index) {
    //   setSignProp(index);
    //   console.log(signProp)
  
    // }
    // newSignValue={handleName}

    const testfunc = (index) => {
      setSignProp(index);
      
    }

  return (
    <Router>
      <div className="App">
        <div className="background">
        {/* <signContext.Provider value="msg"> */}
        
          <Routes>      
            <Route path='/' element={<Home/>}/>
            <Route path='/horoscope' element={<Horoscope  newSignValue={testfunc}/> }/>
            <Route path='/about' element={<About signText={text}/>}/>
          </Routes>
          {/* </signContext.Provider> */}
        </div>
      </div>
    </Router>
  );
  
}

export default App;
