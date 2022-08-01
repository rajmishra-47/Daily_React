import React from 'react'
import './d11.css'

import CNC from './cnc'

export default function D1(props) {
  
  const c=(a,b)=>{
    return (a+b);
  }

  const clc=()=>{
    console.log("you clicked");
  }


  const date=new Date();
  return (
    <>
    <div id="a1">
        hello
    </div>

    <h1>{(parseInt(props.a)+parseInt(props.b))}</h1>

    <CNC></CNC>

    {/* <button onClick={clc()}> click me</button> */}
    </>
  )
}
