import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted to Uppercase","success")
    }
    const handleLowClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(" Converted to Lowercase","success")
    }

    const handleClearText = () =>{
        let newText = "";
        setText(newText)
        props.showAlert(" Cleared","success")
    }

    const handleCopy = () =>{
      var text = document.getElementById("myBox");
      text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert(" Copy to Clipboard","success")

    }
    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value);

    }
    const [text, setText] = useState('');
    // text = "nskjbfjksdf"; //this is the wrong way to set text
    // setText(new text); //this is the correct way to set textc

  return (
      <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'rgb(29 49 48', color: props.mode==='light'?'black':'white' }} placeholder="Enter Text Here" id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split("").length} words and  {text.length} characters</p>
        <p>{0.008 * text.split("").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
    </div>
    </>
  );

}