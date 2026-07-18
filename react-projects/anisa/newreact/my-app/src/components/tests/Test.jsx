import React, { useContext, useEffect, useReducer, useState } from 'react'
import { ThemeContext } from '../../App'



function reducer(state, action) {
    switch (action.typeof) {
        case 'ADD':
            return state + action.payload
        case 'INC':
            return state + action.payload
        default:
            return state
    }
}

export default function Test() {

    const theme = useContext(ThemeContext)

    const [state, dispatch] = useReducer(reducer, 0)


    return (
        <div className='box content' style={theme}>
            <h1>{state}</h1>
            <button onClick={() => dispatch({ typeof: 'ADD', payload: 1 })}>1+</button>
            <button onClick={() => dispatch({ typeof: 'ADD', payload: 2 })}>2+</button>
            <button onClick={() => dispatch({ typeof: 'INC', payload: -1 })}>-1</button>
        </div>
    )
}


// const [todo, setTodo] = useState('')
// const [item, setItem] = useState([])
//    const items = [1,2,3,4,5,6]

// const clickHandler = () => {
//     setItem(item => [todo, ...item])
// }