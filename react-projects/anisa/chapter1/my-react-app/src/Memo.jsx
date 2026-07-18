import React, { useState } from 'react'

export default function Memo() {
    const [counter1 , setCounter1] = useState(0)
    const [counter2 , setCounter2] = useState(0)
  return (
    <div> 
      
      <button onClick={setCounter1(c => c+1)}>changehandler1</button>
      <button onClick={setCounter2(c => c+1)}>changehandler2</button>

      <MyComponent />
      <MyMemoComponent />
    </div>
  )
}

function MyComponent () {
    return <div>myComponent</div>
}

function MyMemoComponent () {
    return <div>
        MyMemoComponent
    </div>
}