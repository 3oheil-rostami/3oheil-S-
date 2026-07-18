import React from 'react'

export default function UseProps({name , lastname}) {
  return (
    <div>
        <h4>Name : {name} </h4>
        <h4>Last Name:  {lastname}</h4>
        {/* <hr style={{backgroundColor:'red' , color:'red'}}/> */}

    </div>
  )
}
