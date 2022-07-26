import React,{useState} from 'react'
import data from './data'

export default function C1() {

    const [count,setCount] =useState(data);

  return (
    <>
    <div className="container"><h1>{count.length} birthdays</h1></div>

    <button className='btn btn-primary'>Click-me</button>
    </>
  )
}
