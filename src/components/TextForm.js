// import { useState } from "react"
import React, {useState} from 'react'

export default function TextForm(props) {

const handleUpClick = () =>{
  // console.log("UpperCase was Clicked" + text);
  let newText = text.toUpperCase();
  setText(newText);
}
const handleLowClick = () =>{
  // console.log("UpperCase was Clicked" + text);
  let newText = text.toLowerCase();
  setText(newText);
}
const handleCopy = () =>{
  // console.log("UpperCase was Clicked" + text);
  let text = document.getElementById("mybox");
  navigator.clipboard.writeText(text.value);
}
const handleClearClick = () =>{
  // console.log("UpperCase was Clicked" + text);
  let newText = '';
  setText(newText);
}

const handleExtrSpace = () =>{
  // console.log("UpperCase was Clicked" + text);
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
}

const handleOnChange = (event) =>{
  // console.log("On Change");
  setText(event.target.value)
}

  const [text, setText] = useState("");
  // setText("new text");
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading} </h1>
      <div className="my-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
      color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
      </div>
      <button className='btn btn-primary  my-2 mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
      <button className='btn btn-primary my-2 mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
      <button className='btn btn-primary my-2 mx-2' onClick={handleCopy}>Copy Text</button>
      <button className='btn btn-primary my-2 mx-2' onClick={handleClearClick} >Clear Text </button>
      <button className='btn btn-primary my-2 mx-2' onClick={handleExtrSpace} >Remove Extra Space</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>
        Your text summary
      </h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p> {text.length>0?text:"Enter something in the box above to preview it here"} </p>
    </div>
    </>
  )
}
