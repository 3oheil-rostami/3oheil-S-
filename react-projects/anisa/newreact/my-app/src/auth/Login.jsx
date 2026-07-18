import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import LoginForm from './LoginForm'
import UserContext from '../context/UserContext'
import { Navigate } from 'react-router-dom'
import Loading from '../utils/Loading'

export default function Login() {
    const theme = useContext(ThemeContext)
    const { isLoggedIn , isLoading } = useContext(UserContext)

    if (isLoading) {
        return <Loading />
    }

    if (isLoggedIn) {
        return <Navigate to='/' />
    }
    return (

        <div className='content box' style={theme}>
            <h2>Login</h2>
            <LoginForm />
        </div>
    )
}
