import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../App'
import UserContext from '../../context/UserContext'
import Test from './Test'
import { Link } from 'react-router-dom'

export default function Header() {
  const [change, setChange] = useState(false)
  const [count , setCount] = useState(0)
  const [state, setState] = useState(null || <Test /> || <h2>Hi</h2>)


  const theme = useContext(ThemeContext)
  const { login, isLoggedIn, isLoading, logout, users } = useContext(UserContext)
  console.log(users)

  // console.log(isLoading)
  // console.log(login)


  console.log('isLoggedIn:', isLoggedIn)
  console.log('users:', users)

  useEffect(() => {
    console.log('Mount')
  }, [count])

  return (
    <div className='box header' style={theme}>
      <div>
        <h2>Header</h2>
        <h4>name : {users.name}</h4>
      </div>
      <div>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setChange(!change)}>click</button>
        <div className={change ? 'alll' : ''} style={{ width: '100px', height: '100px' }}>
          <div>
            {change ? state : ''}
          </div>
        </div>
      </div>
      <div className='conditioan'>
        {isLoading && <span>Loading...</span>}

        {isLoggedIn && (
          <>
            <span>{users.name}</span>
            <span className="logout" onClick={logout}>Logout</span>
          </>
        )}
      

        {!isLoggedIn && (
          <Link to="/login">
            <span className="login">Login</span>
          </Link>
        )}

      </div>
    </div>
  )
}
