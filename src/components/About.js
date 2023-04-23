// import React, { useState } from 'react'

export default function About(props) {
    // const[myStyle,setmyStyle]=useState(
    // {
    //     color:'black',
    //     backgroundColor:'white'

    // })
    // const [btntext,setBtnText]=useState("Enable Dark Mode")

    // const toggleStyle=()=>{
    //     if(myStyle.color==='black'){
    //         setmyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'1px solid white'
    //         })
    //         setBtnText("Enable Light Mode");

    //     }
    //     else{
    //         setmyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    // }

    let myStyle ={
      color:props.mode==='dark'?'white':'#03171d',
      backgroundColor:props.mode==='dark'?'#03171d':'white',
      
    }
    let myButtonStyle ={
      color:props.mode==='dark'?'white':'black',
      backgroundColor:props.mode==='dark'?'#34797d':'white',
      border:'2px solid',
      boderColor:'white'
    }
    // let myItenSytle={
    //   color:props.mode==='dark'?'black':'black',
    //   backgroundColor:props.mode==='dark'?'white':'white',
    // }
  return (

    
    <div className="container" style={myStyle} >
        <h2 className='my-2'>About Us</h2>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myButtonStyle}>Analyze ypur text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myButtonStyle}>
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myButtonStyle}>
        Browser compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
{/* <div className="container my-3" onClick={toggleStyle }><button type='button' className='btn btn-primary'>{btntext}</button></div> */}
    </div>
      
    
  )
}
