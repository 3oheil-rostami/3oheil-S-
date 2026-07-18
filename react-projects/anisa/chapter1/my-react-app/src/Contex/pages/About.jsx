import React, { useContext, useEffect, useRef, useState } from 'react'
import { ThemContex } from '../App'
import UserConytext from '../context/UserContext'
import ListJobs from '../components/ListJobs'

export default function About() {
  // const  them  = useContext(ThemContex)
  const them = useContext(ThemContex)
  
  const [state, setState] = useState('')
  const [int, setInt] = useState(true)
  const [show , setShow] = useState(false)
  const [num , setNum] = useState(0.03)
  const inputRef = useRef()
  const jobs = [
    {id:1 , nam : 'Soheil' , family:'Rostami' , job:'Developer' , age : 21},
    {id:1 , nam : 'Soheil' , family:'Rostami' , job:'Developer' , age : 21}
  ]

  useEffect(() => {
    inputRef.current.focus()
  }, [])
  const clickHandler = () => {
    setShow(true)
    
  }
  console.log(num-0.01)
  console.log(Math.ceil(num-0.01))
  return (
    <div style={them}>
      <h1>About page</h1>
      <div>

        <input onChange={(e) => setState((e.target.value))} type="text" />
        <button onClick={clickHandler}>0</button>
        {show && <h1>{state}</h1>}
        <h2> your Name : {state}</h2>
        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', gap: '20px', borderRadius: '20px' }}>
          <input maxLength={1} className='input' type="text" onChange={() => setInt(!int)} ref={inputRef}/>
          <input maxLength={1} className='input' type="text" onChange={() => setInt(!int)} />
          <input maxLength={1} className='input' type="text" onChange={() => setInt(!int)} />
          <input maxLength={1} className='input' type="text" onChange={() => setInt(!int)} />
        </div>
        <ListJobs nam='Soheil' family='Rostami' age={21} job='Developer'/>
        {
          jobs.map((job) => (
            <ListJobs {...job}/>
           
          ))
        }
      </div>
    </div>
  )
}
