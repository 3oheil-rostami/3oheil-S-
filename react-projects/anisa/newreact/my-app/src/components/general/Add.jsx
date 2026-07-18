import React, { useState } from 'react'

export default function Add() {
    const [state , setState] = useState(10)

    const addData = () => {
       
    }

  return (
    <div>
        <h2>{state}</h2>
        <button onClick={() => setState(state*100)}>
            add
        </button>
      
    </div>
  )
}
