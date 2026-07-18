import React, { useEffect, useRef, useState } from 'react'

import Name from './Name'
export default function TodoList({name}) {
    const [todos , setTodos] = useState([])
    const [task , setTask] = useState('')
    const users = [
      {id:1 , namee:'Soheil' , age:21}
    ]
    // const inut = useRef()


    // useEffect(() => {
    //     inut.current.focus()
    // },[])
// 
    function handleSubmit (e) {
        e.preventDefault()
        setTodos(todos => [...todos , task])
        setTask('')
    }
    // function remove () {
    //     document.body.style.display = 'none'
    // }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <h1>TO Do List</h1>
       <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
       <button type='submit'>Add Task</button>
      </form>
      <ol>
        {todos.map((to , i) => {
            return (<li key={i}>{to}
           
            </li>)
           
        })}
       <Name {...users[0]}/>
       
      </ol>
    </div>
  )
}
