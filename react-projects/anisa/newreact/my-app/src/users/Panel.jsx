import React, { lazy, useContext, useEffect, useRef, useState } from 'react'
import { ThemeContext } from '../App'
import UserContext from '../context/UserContext'
import Add from '../components/general/Add'
import axios from 'axios'
import { data } from 'react-router-dom'

export default function Panel() {
    const theme = useContext(ThemeContext)
    const { users, login, isLoggedIn } = useContext(UserContext)
    const [time, setTime] = useState(0)
    const [state, setState] = useState(0)
    const [roule, setRoule] = useState(false)
    const [ test , setTset] = useState([])
    const Add = lazy(() => import('../components/general/Add'))

    const inputRef = useRef()

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users/1')
        .then(res => setTset(res.data))
    } , [])

    console.log(test)
    console.log(test.name)
    // console.log(test.name)
    // console.log(test.id)
        // useEffect(() => {
        //     inputRef.current.focus()
        // } ,[])

        // useEffect(() => {
        //     setInterval(() => {
        //         setTime(time => time + 1)
        //     }, 1000);

        // }, [])

    return (
        <div className='content box' style={theme}>

            <h2>Panel Page </h2>
            <h3>name : {users.name}</h3>
            <h1>{time}</h1>

            <hr />
            <div >
                <h3>{state}</h3>
                <button onClick={() => setState(state - 1)}>-</button>
                <button onClick={() => setState(0)}>Reset</button>
                <button onClick={() => setState(state + 1)}>+</button>
            </div>
            <hr />
            <div>
                <h2>Are you +18?</h2>
                <div style={{ margin: '10px' }}>
                    <button onClick={() => setRoule(!roule)}>YES</button>
                    <button>No</button>

                </div>
                {roule ? <h1>
                    <p>امروز بزرگترین اعتراضات مردم سرزمین ایران در خارج از مرزهای ایران انجام شد و شهرهای مونیخ لس انجلس و تورنتو میزبان ایرناین های سرزمینامنا بودندن </p>
                </h1> : <h1>You are not +18 to see</h1>}
            </div>
            <hr />
            <div>
                Use Ref
                <div>
                    <input type="text" ref={inputRef}/>

                </div>
            </div>
            <div>
                <React.Suspense fallback='Loading ...'>
                    <Add/>
                </React.Suspense>
            </div>
            {/* <h3>TEST LINK</h3>
            <div >
                link : {
                    time > 5 ? <a style={{color:'green'}} href="">Univercity</a> : ''
                }
            </div> */}
        </div>
    )
}
