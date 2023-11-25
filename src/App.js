import './App.css';
import Navbar from    './components/Navbar'
import TextForm from    './components/TextForm'
import About from './components/About'
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
   BrowserRouter as Router,
  Routes,
  Route,
 //Link
} from "react-router-dom";




function App() {
  const [mode,setmode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
   setAlert(null)
    },2000)
  };

  const togglemode=()=>{
    if(mode==='light'){
    setmode('dark'); 
    document.body.style.backgroundColor="#042743";
    showAlert('dark mode has been enabled',"success");
  }else{
    setmode('light');
    document.body.style.backgroundColor="white";
    showAlert('light mode has been enabled',"success");
  }
}
  
  return (
    <> 
   
{/* <Navbar title="textutils" mode={mode}  heading="love" abouttext="aboutus"/> */}

 <Router> 
  <Navbar title="textutils" mode={mode} togglemode={togglemode}/>
  <Alert alert={alert}/>
<div className="container my-3">
      <Routes>
          <Route path="/textform" element={<TextForm showAlert={showAlert} mode={mode} heading='Try Textutils-word counter,character counter etc'/>}/>
          <Route path="/About" element={<About title='About us' mode={mode}/>}/>
          {/* <TextForm showAlert={showAlert} mode={mode} heading='enter the text to analyze'/> */}
         

        </Routes>
</div>

</Router> 


</>


  );

  }
export default App;


