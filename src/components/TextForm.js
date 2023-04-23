import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("uppercase was clicked "+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleOnChange=(event)=>{
        console.log("on Change");
        setText(event.target.value);//to be able to write text in the input box which was not possible bcoz of value={text}
    }
    const handleLoClick=()=>{
      console.log("Lowercase was clicked " +text);
      let newText1=text.toLowerCase();

      setText(newText1);
      props.showAlert("Converted to Lowercase","success");
    
    }
    const handleClearClick=()=>{
      console.log("Clear the text " +text);
      let newText1='';

      setText(newText1);
      props.showAlert("Text is cleared","success");
    }
    const handleReverseClick=()=>{
      console.log("reverse was clicked "+ text);
      let newText=text.split('').reverse().join('');
      setText(newText);
      props.showAlert("Text is Reversed ","success");
    }
    const handleCopyClick=()=>{
      var text =document.getElementById("mybox");
      text.select();
      document.getSelection().removeAllRanges();
      navigator.clipboard.writeText(text.value); 
      props.showAlert("Text is copied","success");
    }
    const handleExtaSpcaClick=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Exta spaces is removed","success");
    }
    const[text, setText]=useState('');
    //text="new text";wrong way to change the state
    //setText("new text");right way

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#03171d'}}>
    
    <h1>{props.heading}</h1>
    <div className="mb-4">
        
      {/* <label for="mybox" className="form-label">Example Textarea</label> */}
      <textarea  className="form-control" id="mybox" rows="8"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#8da45b':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
    </div>
    <button type="submit" className="btn btn-primary mx-3 my-3" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
    <button type="submit" className="btn btn-primary mx-3 my-3" disabled={text.length===0} onClick={handleLoClick}>Convert to Lowercase</button>
    <button type="submit" className="btn btn-primary mx-3 my-3" disabled={text.length===0} onClick={handleClearClick}>Clear text</button>
    <button type="submit" className="btn btn-primary mx-3 my-3" disabled={text.length===0} onClick={handleReverseClick}>Reverse text</button>
    <button type="submit" className="btn btn-primary mx-3 my-3" disabled={text.length===0} onClick={handleCopyClick}>Copy text</button>
    <button type="submit" className="btn btn-primary mx-3 my-3" disabled={text.length===0} onClick={handleExtaSpcaClick}>Remove exta Spaces </button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#03171d'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>preview </h2>
      <p>{text.length>0?text:"Nothing to preview!! "}</p>

    </div>
    </>
  )
}
