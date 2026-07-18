import React from 'react'

export default function Family({name , lastname}) {
  return (
    <div style={{display:'flex', border:'1px solid'}}>
        <div style={{display:'flex', gap:'20px', justifyContent:'center', alignItems:'center', fontSize:'1rem'}}>
            <p>First Name :{name}</p>
            <p>Last Name :{lastname}</p>
        </div>
      
    </div>
  )
}
