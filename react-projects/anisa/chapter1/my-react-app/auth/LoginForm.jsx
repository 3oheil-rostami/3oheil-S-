import { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserConytext from '../src/Contex/context/UserContext'
import './Login.css'

export default function LoginForm() {
  const { isLogin, user, login } = useContext(UserConytext)

  const [isLoading, setIsLoading] = useState(true)
  const [err, setErr] = useState('')
  const navigate = useNavigate()

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000) // بعد از ۱ ثانیه لودینگ تمام میشه

    return () => clearTimeout(timer)
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    const username = data.get('username')
    const password = data.get('password')

    if (username === 'adm' && password === '123') {
      login(username)
      navigate(`/tamas`)
    } else {
      //  return alert("Username or password is incorrect")
      setErr('Error')
      setTimeout(() => {
        setErr('')
      }, 3000);
    }

  }


  if (isLoading) {
    return <div style={{ textAlign: 'center', fontSize: '20px' }}>Loading ...</div>
  }

  return (
    <div className="login-wrapper">
      <div className="login-box">
        {/* {isLogin ? <p>Hi</p> : <p>By</p>} */}
        {err && <div style={{color:'red', fontSize:'2rem'}}>
          <p style={{fontSize:'1.5rem'}}>نام کاربری یا رمز شما اشتباه میباشد</p>
          </div>
          }
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <label>Username</label>
          <div>
            <input type="text" placeholder="Username" name="username" />
          </div>
          <label>Password</label>
          <div>
            <input type="password" placeholder="Password" name="password" />
          </div>
          <button style={{ marginTop: '20px' }} type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}