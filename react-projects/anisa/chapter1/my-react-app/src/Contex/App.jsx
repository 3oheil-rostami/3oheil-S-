import React, { useState } from 'react'
import './assets/styles/main.css'
import ProductManger from './context/ProductManger'
import Home from './components/general/Home'
import Footer from './components/share/Footer'
import Header from './components/share/Header'
import Sidebar from './components/share/Sidebar'
// import axios from 'axios'
// import { data } from 'react-router-dom'
import UserConytext from './context/UserContext'
import request from './tools/request'
import AppRoutes from './routes/AppRoutes'
import Prodcut from './pages/Prodcut'
import ScoreUser from './context/ScoreUser'


export const ThemContex = React.createContext()
// export const UserContext = React.createContext()


const thems = {
  dark: { color: 'black', backgroundColor: 'lightgray' },
  light: { color: 'white', backgroundColor: 'black' }

}
export default function ContexApp() {

  // const [tem, setTem] = useState(false)
  const [esm, setEsm] = useState('Soheil')
  const [them, setThem] = useState(thems.light)
  // const [user, setUser] = useState({})
  // const [isLogin, setIsLogin] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [numm, setNumm] = useState(0)
  // const name = localStorage.setItem('Soheil')

  const [score, setScore] = useState([
    { id: 1, name: 'Staric', score: 10 },
    { id: 2, name: 'Fizik', score: 18 },
    { id: 3, name: 'Polymer', score: 20 }
  ])


  const [user, setUser] = useState(() => {

    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : {}

  })

  const [isLogin, setIsLogin] = useState(() => {
    return localStorage.getItem('isLogin') === 'true'
  })

  function login() {
    setIsLoading(true)
    request('/users/1')
      .then(res => {
        setUser(res.data)
        setIsLogin(true)
        // ذخیره توی localStorage
        localStorage.setItem('user', JSON.stringify(res.data))
        localStorage.setItem('isLogin', 'true')
      })
      .finally(() => setIsLoading(false))
  }

  function logout() {
    setUser({})
    setIsLogin(false)
    localStorage.removeItem('user')
    localStorage.removeItem('isLogin')
  }



  return (
    <div>
      <div>
        <div className='btn-them'>
          <button style={{ display: 'flex', margin: 'auto', fontSize: '1.5rem' }} onClick={() => {
            setThem(them => them === thems.light ? setThem(thems.dark) : setThem(thems.light))
          }}>{them ? 'Light' : 'Dark'}</button>
        </div>

        <UserConytext.Provider value={{ user, login, isLoading, isLogin, logout, esm }}>
          <ThemContex.Provider value={them}>

            <Header />


            <ScoreUser.Provider value={score}>
              <ProductManger.Provider value={{ numm, setNumm }}>
                <div className="main">
                  <Sidebar them={them} />
                  <Home />
                </div>
                <Footer them={them} />
              </ProductManger.Provider>
            </ScoreUser.Provider>

          </ThemContex.Provider>
        </UserConytext.Provider>
        {/* <AppRoutes /> */}
      </div>
    </div>
  )
}

