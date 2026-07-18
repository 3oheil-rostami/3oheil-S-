import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    // const [mount , setMount] = useState(true)
    const [name, setName] = useState('mount')
    // const [users, setUsers] = useState([])
    // const [num, setNum] = useState(0)
    const [state, setState] = useState(0)

    // useEffect(() => {
    //     const clickHandler = () => {
    //         setState(state +1)
    //     }
    // }, [state])

    // console.log(2)
    // console.log(3)
    // console.log(4)
    const clickHandler = () => {
        setTimeout(() => {
            setState(state + 1)
        }, 0)
    }
    const decreaseHandler = () => {
        setState(state - 1)
        // console.log(3)
    }
    useEffect(() => {
        console.log(1)
        return console.log(2)
        
    },[state])

    // useEffect(() => {
    //     setInterval((w) =>{
    //         w => clickHandler()
    //     },2000)
    // },[])


    // const addHandle = () => {
    //     setNum(num + 1)
    // }
    // const clickHandler = () => {
    //     setMount(!mount)
    //     console.log(mount)
    // }
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(respnse => respnse.json())
    //         .then(data => setUsers(data))
    // }, [])

    // useEffect(() => {
    //     document.title = `pages : ${num}`
    // },[num])
    // console.log(document.title)
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         console.log("hi");
    //     }, 3000);

    //     return () => {
    //         clearInterval(timer); // پاک‌سازی
    //         console.log("کامپوننت در حال حذف شدن است");
    //     };
    // }, []);



    return (
        <div style={{textAlign:'center'}}>
            <h1>{state}</h1>
            <div style={{fontSize:'25px'}}>
                <button style={{margin:'10px'}} onClick={clickHandler}>+</button>
                <button onClick={decreaseHandler}>-</button>
            </div>
            {/* <button onClick={clickHandler}>{mount ? 'mount' : 'unmount' }</button>
            {mount && <Mycom/> } */}
            {/* {
                users.map(user => (
                    <div key={user.id}>
                        <li>  {user.name}</li>
                    </div>
                ))
            } */}
            {/* <button onClick={addHandle}>{num}</button> */}
        </div>
    )
}

function Mycom() {
    return (
        <>
            <h1>Soheil</h1>
        </>
    )
}