import React,{useState} from 'react'

export default function Darkmode() {

    const b=()=>{
        document.querySelector('body').style.backgroundColor='black'
        document.querySelector('body').style.color='white'
    }

    const c=()=>{
        document.querySelector('body').style.backgroundColor='white'
        document.querySelector('body').style.color='black'
    }

    // const [count,setCount]=useState();

  return (
    <>

    <button className="btn btn-dark" onClick={b}>Dark mode</button>
    <button className="btn btn-dark m-5" onClick={c}>Disable</button>
    </>
  )
}
