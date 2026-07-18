import React from 'react'
import Props from '../Props' 

export default function Pro(props) {
    console.log(props)
  return (
    <div>
        welocom {props.name}
      <Props />
    </div>
  )
}