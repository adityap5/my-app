import React, { useState } from 'react'

export default function Textform(props) {
  const handleUpClick = () => {

    let newtext = text.toUpperCase();
    setText(newtext)
  }
  const handleDownClick = () => {

    let newtext = text.toLowerCase();
    setText(newtext)
  }
  const handleOnChange = (event) => {

    setText(event.target.value)
  }
  const handleclearClick = () => {
    let newtext = "";
    setText(newtext)
  }
  const handleOnCopy = () => {
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);

  }
  const [text, setText] = useState('');
  return (

    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2 >{props.heading}</h2>
        < div className="mb-3">

          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="9"></textarea>
        </div>

        <button className="btn btn-dark my-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-dark mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
        <button className="btn btn-dark mx-2" onClick={handleclearClick}>Clear Text</button>
        <button className="btn btn-dark mx-2" onClick={handleOnCopy}>Copy Text</button>


      </div>
      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} words {text.length}characters</p>
        <h3>Preview</h3>
        <p>{text}</p>

      </div>

    </>
  )
}
