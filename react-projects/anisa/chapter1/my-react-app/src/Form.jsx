import React, { useState } from 'react'

export default function Forming() {
    const [name, setName] = useState('')

    const [password, setPassword] = useState('')

    const clickHandler = () => {
        
    }
    const inHandler = (e) => {
        const inputt = e.target.value
        setName(inputt)
        console.log(inputt)
    }
    const passHandler = (e) => {
        const pass = e.target.value
        setPassword(pass)
    }

    return (
        <div>
            <label htmlFor="">Username</label>
            <input onChange={inHandler} type="text" name="" id="" />
            <h3>{name}</h3>
            <label htmlFor="">password</label>
            <input onChange={passHandler} type="password" />
            <h3>{password}</h3>
            <button onClick={clickHandler} type='submit'>submit</button>
        </div>
    )
}

