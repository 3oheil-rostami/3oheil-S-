import React, { useEffect, useState } from 'react'

export default function Parent() {
    const [mount , setMount] = useState(true)
    const clickHandler = () => {
        if(mount == true) {
            setMount(false)
        }
        else {
            setMount(true)
        }
    }
    console.log(mount)
    return (
        <div>

            <button onClick={clickHandler}>{mount ? 'UnMount' : 'Mount'}</button>
            {mount && <Child />}
        </div>
    )
}

function Child() {
    const [count, setCount] = useState(1)

    useEffect(() => {
        setInterval(() => {
            setCount(c => c + 1)
        }, 1000)
    }, [])
    return (
        <div>
            <h1>Count : {count}</h1>
        </div>
    )
}