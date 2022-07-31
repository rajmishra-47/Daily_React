import React from 'react'
import './d11.css'
export default function D1(props) {
  
  const c=(a,b)=>{
    return (a+b);
  }

  const date=new Date();
  return (
    <>
    <div id="a1">
        hello
    </div>

    <h1>{(parseInt(props.a)+parseInt(props.b))}</h1>
    </>
  )
}
