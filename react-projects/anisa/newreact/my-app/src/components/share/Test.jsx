import React from 'react'

export default function Test() {

  const test = localStorage.setItem('name' , 'Sofia')
  console.log(localStorage.getItem('name'))
  return (
    <div>
      <h1>Test Component</h1>
    </div>
  )
}
