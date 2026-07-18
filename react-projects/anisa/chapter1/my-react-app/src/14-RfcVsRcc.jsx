import React, { useEffect, useState } from 'react'

export default function RfcVsRcc() {

    const [num, setNum] = useState(0)
    const [count , setCountt] = useState(60)
    // useEffect(() => {
    //     setInterval(() => 
    //        setCountt(pre => pre + 1)
    //     , 1000);
    // } , [])
    console.log('render' , num)
    console.log('render' , count)
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={() => {
                setNum(num +1)
            }}>+</button>
            <h3>{count}</h3>
        </div>
    )
}
