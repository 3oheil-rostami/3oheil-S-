import React, { createContext, useContext, useState } from 'react'
import ProductManger from '../context/ProductManger'


export default function Prodcut() {
  const { numm, setNumm } = useContext(ProductManger)

  const [state, setState] = useState(true)

  const increase = () => setNumm(numm + 1)
  const decrease = () => setNumm(numm - 1)
  return (
    <div>
      <button onClick={() => setState(!state)}>{state ? 'mount' : 'unmount'}</button>


      {state ? <div>
        {`state is ${state}`}
      </div> : ''}
      {
        state && <SayHi />
      }
      <h1>Product  : {numm}</h1>
      <button onClick={increase}>+</button>______
      <button onClick={decrease}>-</button>
    </div>
  )
}
function SayHi() {
  return (
    <h2>Hi</h2>
  )
}

// <div>
//   <h2>Prodcut</h2>
//   <h2>{num}</h2>
//   <button onClick={() => setNum(num + 1)}>+</button>
//   <button onClick={() => setNum(num - 1)}>-</button>
// </div>