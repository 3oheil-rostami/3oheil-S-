import React, { useContext } from 'react'
import LoginForm from './LoginForm'
import UserConytext from '../src/Contex/context/UserContext'

export default function Login() {

  const {isLogin , user} = useContext(UserConytext)

  console.log(isLogin)
  console.log(user)
    // if(username=='admin') {
    //     console.log('Hi')
    // }else {
    //     console.log('by')
    // }
  return (
    <div className='content box'>
        <h2>Login</h2>
        <LoginForm />
    </div>
  )
}
