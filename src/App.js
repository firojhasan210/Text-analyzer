
import './App.css';
import TextForm from './components/TextForm';
import Navbar from  './components/Navbar';
import Cards from './components/Cards';
import React,  { useState } from 'react';
// import bgImage from './components/bgImage';
// import Basic from './components/Basic';
function App() {
  const [mode, setMode] = useState('light');//whether dark mode is eneble or not
 
 const toggleMode = () =>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor = '#042743';
  }else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
  }
 }

  return (
    <>
      <Navbar title="React" mode={mode}  toggleMode={toggleMode} />
      {/* <Navbar /> */}
      <div className="container my-3">
      {/* Your component content */}
      <TextForm heading="Enter text to analyze below" mode={mode} /> {/*#12;*/}
       </div>
    {/* 
  <div className='container'>

 <textForm/>
  </div> */}
  {/* <bgImage/> */}
  
  
  {/* <Basic/>   */}
  <div>
    <Cards/>
  </div>
  
 </>
  
  );
}
 
export default App;
