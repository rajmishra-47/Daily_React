import React,{useState} from 'react'

export default function Clock() {

    const [count,setCount]=useState(' ');

    const a=()=>{

        let d= new Date;

        setCount(d.toLocaleTimeString());
    }

    setInterval(a,1000);

  return (
    <>
    <h1>{count}</h1>
    </>
  )
}
