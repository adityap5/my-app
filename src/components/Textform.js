import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        
        let newtext= text.toUpperCase();
        setText(newtext)
    }
    const handleDownClick=()=>{
       
        let newtext= text.toLowerCase();
        setText(newtext)
    }
    const handleOnChange=(event)=>{

setText(event.target.value)
    }
    const handleclearClick=()=>{
        let newtext="";
        setText(newtext)
    }
    const[text, setText] =useState('');
  return (

    <>
      <div>
        <h2>{props.heading}</h2>
< div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
</div>

<button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>


</div>
<div className="container my-4">
<h3>Your Text Summary</h3>
<p>{text.split(" ").length} words {text.length}characters</p>
<h3>Preview</h3>
<p>{text}</p>

</div>
   
    </>
  )
}
