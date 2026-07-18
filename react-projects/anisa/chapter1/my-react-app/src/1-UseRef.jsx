import React, { useEffect, useRef } from "react"

function UseRef () {
  const inputRef = useRef()
  useEffect((e) => {
    console.log(inputRef.current.focus())
  })

  const inputHandler = (e) => {
    console.log(e.target.value)
  }
  return (
    <div>
      <input type="text" onChange={inputHandler} ref={inputRef}/>
    </div>
  )
}
export default UseRef