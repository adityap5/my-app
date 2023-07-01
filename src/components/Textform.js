import React, { useState } from 'react'

export default function Textform(props) {
  const handleUpClick = () => {

    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("converted to Uppercase", "success")
  }
  const handleDownClick = () => {

    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("converted to Lowercase", "success")

  }
  const handleOnChange = (event) => {

    setText(event.target.value)
  }
  const handleclearClick = () => {
    let newtext = "";
    setText(newtext)
    props.showAlert("Cleared text", "success")

  }
  const handleOnCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Coppied to clipboard", "success")

  }
  const [text, setText] = useState('');
  return (

    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2 >{props.heading}</h2>
        < div className="mb-3">

          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#a5a4a4' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="9"></textarea>
        </div>

        <button disabled={text.length === 0} className="btn btn-dark my-3 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-dark mx-2 my-2" onClick={handleDownClick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-dark mx-2 my-2" onClick={handleclearClick}>Clear Text</button>
        <button disabled={text.length === 0} className="btn btn-dark mx-2 my-2" onClick={handleOnCopy}>Copy Text</button>


      </div>
      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words {text.length} characters</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview "}</p>

      </div>

    </>
  )
}
