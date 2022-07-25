import React,{useState} from 'react'

export default function Text() {

  const [count,setCount]=useState("Enter text")

  const b=()=>{

     setCount(count.toUpperCase());
  }

  const change=(event)=>{
    setCount(event.target.value);
  }


  return (
    <>
    <div className="container">
   

<div class="form-group">
  <label for="exampleFormControlTextarea2">Small textarea</label>
  <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" value={count} onChange={change}></textarea>
</div>

<h1>{count}</h1>

    <button className="btn btn-primary" onClick={b}>Click-me</button>
    </div>
    </>
  )
}
