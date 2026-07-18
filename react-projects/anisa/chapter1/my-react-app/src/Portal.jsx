import React, { useEffect, useState } from "react"

import ReactDom from 'react-dom'
function Portal () {
    const [num , setNum] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setNum(pre => pre + 1)
        } , 1000)
    } , [])
    return ReactDom.createPortal (
        <div style={{textAlign:'center'}}>
            <h1>{num}</h1>
            <h2>ss</h2>
        </div> ,
             document.getElementById('portal')
    );
}
export default Portal
