import React from 'react'
import "./styles.css"
import { MdMic } from "react-icons/md";


const Content = () => {
  return (
    <>
    <div style={{width:"80vw",backgroundColor:"black",marginTop:"-602px", height:"600px", color:"gray", border:"1px solid red",display:"flex",position:"absolute",left:"20vw"}}>
       
       <div className='box'>
        <div className='card'>
            <div className='first'>
                <img src="https://www.gstatic.com/lamda/images/sparkle_resting_v2_darkmode_2bdb7df2724e450073ede.gif"/>
            </div>
            <div className='second'>
                <p>I’m Bard, your creative and helpful collaborator. I have limitations and won’t always get it right, but your feedback will help me improve.</p>
                <p>Not sure where to start? You can try:</p>
                <p>Draft a packing list for my weekend fishing and camping trip</p>
                <p>I want to write a novel. How can I get started?</p>
                <p>Give me some ideas to surprise my movie-loving friend on their birthday</p>
            </div>
        </div>

        <div className='incard'>
            <input placeholder='Enter a prompt here'/>

            <span>
              <MdMic></MdMic>
            </span>            
        </div>
       </div>

       
    </div>
    </>
  )
}

export default Content