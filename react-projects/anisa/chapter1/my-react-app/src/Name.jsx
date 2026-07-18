import React from 'react'

export default function Name({namee , age}) {
  return (
     <div style={{direction:'rtl'}}>
      <h2>سلام {namee}!</h2>
      <p>سن شما: {age}</p>
    </div>
  )
}
