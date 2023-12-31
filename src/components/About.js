import React,{useState} from 'react'

export default function About(props) {
 
    // const [myStyle,setmyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })

    let myStyle={
      Color:props.mode==="dark"?'white':'#042743',
      backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white'
    }


   //const [btntext,setbtntext]=useState('enable darkmode')

  //  const togglestyle=()=>{
  //   if(myStyle.color==='black'){
  //       setmyStyle=({
  //           color:'white',
  //           backgroundColor:'black'
  //       })
  //       setbtntext('enable lightmode')

  //   }else{
  //   setmyStyle({
  //           color:'black',
  //           backgroundColor:'white'
  //       })
  //   }
  //       setbtntext('enable darkmode')
  //  };



  return (
    <div className="container" style={{Color:props.mode==="dark"?'white':'#042743' }} >
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.title}</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong> Analyze your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" style={myStyle} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       Textutils gives you a way to analyze your text quickly and efficiently...be it a word count or character coun
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong> Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        Textutils is a free character counter tool,that provides instant character count and word count statistics for a given text.Textutils reports the number of words and characters..thus it is suitable for
        writing text with word/character Limit
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong> Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       this word counter software works in any web browsers such as chrome,firefox,internet explorer,safari,opera..it suits to count characters in facebook,blog,books,excel document,pdf document,essays,etc... 
      </div>
    </div>
  </div>
</div>

{/* <button className="btn btn-primary" onClick={togglestyle}>{btntext}</button>  */}



    </div>
  )
}
