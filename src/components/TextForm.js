
import React,{useState} from 'react'

export default function TextForm(props) {
    const handleupclick=()=>{
        let newtext=text.toUpperCase()
        console.log('uppercase was clicked')
        settext(newtext);
        props.showAlert('uppercase has been enabled',"success");


    };

    const handlelowclick=()=>{
        let newtext=text.toLowerCase();
        settext(newtext);
        props.showAlert('lowercase has been enabled',"success");

    }

    const handleonchange=(event)=>{
        console.log(' on change');
     settext(event.target.value)

    }

    const handleclearclick=()=>{
      let newtext=""
      settext(newtext); 
      

    }

    const handlecopyclick=()=>{
      var text=document.getElementById('mybox')
      text.select();
      navigator.clipboard.writetext(text.value);
      document.getSelection().removeAllRanges()
    }

    const [text,settext]=useState('enter text here');
  return (
    <>
    <div style={{color:props.mode==='dark'?'white':'042743'}}>
<h1 >{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white', Color:props.mode==='dark'?'white':'042743'}} id="mybox" rows="5" >please enter here</textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary" onClick={handleupclick}>convert to uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlelowclick}>convert to lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleclearclick}>Clear text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlecopyclick}>Copy text</button>


    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'042743'}}>
  <h3>my text summary</h3>
  <p>{text.split(" ").filter((element=>{return element.length!==0})).length} words and {text.length} characters</p>
    <h2>preview</h2>
    <p>{0.008*text.split(" ").filter((element=>{return element.length!==0})).length} minutes read</p>
    </div>
    <p>{text.trim()}</p>
    </>
  )
}

