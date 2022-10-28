import React,{useState} from 'react'

export default function Textform (props) {
    const handleUpperClick = ()=>{
        // console.log("Upper Case was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper case","success")
    }
    const handlelowerClick = ()=>{
        // console.log("Upper Case was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case","success")
    }
    const handleClearClick = ()=>{
        // console.log("Upper Case was clicked");
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared","success")
    }
    const handleCopy = ()=>{
        var text =  document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success")

    }
    const handleExtraspace = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces has been removed!","success")
    }
    const handleOnchange = (event)=>{
        // console.log("on change was clicked");
        setText(event.target.value);
    }

    const [text,setText] = useState(""); 
  return (
    <>
    <div className='container' style = {{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
            
            <textarea className="form-control" value={text} style = {{backgroundColor: props.mode === 'dark'?'grey':'white', color :  props.mode === 'dark'?'white':'#042743'}} onChange={handleOnchange} id="myBox" rows="8"></textarea>
        </div>
        
        <button className="btn btn-primary" onClick={handleUpperClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handlelowerClick} >Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraspace} >Remove Extra Space</button>
    </div>
    <div className="container my-2" style = {{color: props.mode === 'dark'?'white':'#042743'}}> 
        <h1>Your Text Sumamry</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Potential reading time</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter your text in the text box above to preview"}</p>
    </div>
    </>
  )
}
