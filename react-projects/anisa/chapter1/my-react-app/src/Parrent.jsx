import React, { useState } from 'react'
import Chilld from './Chilld'

export default function Parrent() {

    const [count, setCount] = useState(0)

    const increaseHandler = () => {
        setCount(count + 1)
    }

    const decreaseHandler = () => {
        setCount(count - 1)
    }
    const resetHandler = () => {
        setCount(0)
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{count}</h1>
            {count ? <button onClick={decreaseHandler}>decrease</button> : ''}
            <button onClick={increaseHandler}>increase</button>
            {count ? <button onClick={resetHandler}>resetx</button> : ''}

        </div>
    )
}
