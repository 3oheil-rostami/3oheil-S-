import React from 'react'

export default function Chilld({name , age , isOnline , children}) {
  console.log(children)
  return (
    <div>
      <h3>name : {name} </h3>
      <h3>name : {age} </h3>
      <h3>{isOnline ? `ONLine` : 'OFLINE'}</h3>
      {children}
      {/* <h1>name : {name}</h1>
      <h1>Age : {age}</h1>
      <h1>played : {played}</h1> */}
      {/* <h1>Age : {age}</h1> */}
    </div>
  )
}
