import React from 'react'
import Child from './Child'

export default function Pedar() {
    const users = [
        {id:1 , name : 'Soheil' , lastname :'Rostami'},
        {id:1 , name : 'kasra' , lastname :'Kasi'},
        {id:1 , name : 'Ali' , lastname :'Hamidian'}
    ]
  return (
    <div>
      <Child />
     {/* {
        users.map((user) => (
           <ol style={{display:'flex', alignItems:'center'}}>
            <li style={{display:'flex'}}><Child {...user}/></li>
           </ol>
        ))
     } */}
    </div>
  )
}
