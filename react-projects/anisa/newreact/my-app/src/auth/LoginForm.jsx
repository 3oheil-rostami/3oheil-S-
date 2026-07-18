import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import UserContext from '../context/UserContext'

export default function LoginForm() {
    const theme = useContext(ThemeContext)

    const { isLoggedIn, setIsLoggedIn , login} = useContext(UserContext)
    console.log(isLoggedIn)

    function handleSubmit(e) {
        e.preventDefault()
        const data = new FormData(e.target)
        const username = data.get('username')
        const password = data.get('password')

        login({username , password})

        console.log(username, password)
        if (username === 'Soheil' && password === '123') {
            setIsLoggedIn(true)
            alert('Login successful ✅')
        } else {
            alert('Username or password is wrong ❌')
        }
    }

    return (

        <div>

            <form onSubmit={handleSubmit} className='form-item'>
                <label>Username</label>
                <div>
                    <input name='username' />
                </div>
                <label>Password</label>
                <div>
                    <input name='password' />
                </div>
                <div>
                    <button type='Subnit'>Login</button>
                </div>
            </form>
        </div>
    )
}
