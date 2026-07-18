import React, { useState } from 'react'

export default function InputComponent() {
  const [input , setInput] = useState('ویرایش ..')
  const [state , setState] = useState(true)

  const inputHandler = (e) => {
    setInput(e.target.value)
  }
  const clickHandler = () => {
    if(state){
      setState(false)
      console.log('hi')
    }
    else {
      setState(true)
      console.log('by')
    }
  }


  
  return (
    <div>
      <h1>ویرایش اطلاعات</h1>
      {state ? <input onChange={inputHandler} type="text" placeholder={input}/> : <p style={{display:'inline'}}>{input}</p>}
      <button onClick={clickHandler} style={{margin:'15px' ,cursor:'pointer'}}>تغییر دهید اطلاعات را</button>
      
    </div>
  )
}
