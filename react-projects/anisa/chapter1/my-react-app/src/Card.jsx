import React, { useState } from 'react'
import Stateless from './Stateless'

export default function Card({children }) {
    // const [devs , setDevs] = useState([
    //     {id:1 , name : 'Ali'},
    //     {id:2 , name : 'Hosein'},
    //     {id:3 , name : 'Golsa'}
    // ])
  return (
    <div>
        {/* {devs.map((dev) => 
            <div key={dev.id}>
                <h1>{dev.name}</h1>
            </div>
        )} */}
        <Stateless>
            {children}
        </Stateless>
    </div>
  )
}
    // useEffect(() => {
    //     setInterval((w) =>{
    //         w => clickHandler()
    //     },2000)
    // },[])