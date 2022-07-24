import React,{useState} from 'react'

export default function Counter() {
    const [count,setCount]=useState(0);
 
    const b=()=>{

        setCount(count+1);
    }

    const a=()=>{

        setCount(count-1);
    }

    const c=()=>{

        setCount(0);
    }
 
    return (
    <>

    <h1>{count}</h1>

    <button onClick={b}>inc</button>
    <button onClick={a}>dec</button>
    <button onClick={c}>RE</button>
    </>
  )
}
