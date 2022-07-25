import React from 'react'

export default function Darkmode() {

    const b=()=>{
        document.querySelector('body').style.backgroundColor='black'
        document.querySelector('body').style.color='white'
    }

  return (
    <>

    <button className="btn btn-dark" onClick={b}>Dark mode</button>
    </>
  )
}
