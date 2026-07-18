import React, { useEffect, useReducer, useState } from 'react'
import './Style.css'


function reducer(state, action = {}) {
  if (action.type == 'ADD') {

    return state + action.payload
  }

  if (action.type == 'SUB') {
    return state - action.payload
  }
  if (action.type == 'RESET') {
    return state === 5
  }
  return state
}
export default function UseReducer() {
  const [count, setCont] = useState(0)

  const [state, dispacth] = useReducer(reducer, 5)
  const [num, setNum] = useState(0)
  const [one , setOne] = useState(60)

  console.log(state)
  // useEffect(() => {
  //     setInterval(() => {
  //         setCont(w => w+1)
  //     },1000)
  // },[])
  useEffect(() => {
    setInterval(() => {
      setNum(w => w + 1)
    }, 1000)
  }, [])
  useEffect(() => {
    setInterval(() => {
      setOne(w => w -1)
    },1000)
  },[])
  return (
    <div style={{ backgroundColor: 'darkgray', maxWidth: '1000px', textAlign: 'center' }}>
      State : {state}
      <button className='btn' onClick={() => dispacth({ type: 'ADD', payload: 1 })}>+</button>
      <button onClick={() => dispacth({ type: 'ADD', payload: 2 })}>2+</button>
      <button onClick={() => dispacth({ type: 'SUB', payload: 1 })}>-</button>
      <button onClick={() => dispacth({ type: 'Reset' })}>RESET</button>
      <hr />
      Count : {count}
      <button onClick={() => setCont(c => c + 1)}>+</button>
      <hr />
      <h1>{num}</h1>
      <h1>{one}</h1>
      
    </div>
  )
}
