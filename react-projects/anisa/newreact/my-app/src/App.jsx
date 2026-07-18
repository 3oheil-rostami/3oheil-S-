import { createContext, useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './assets/styles/main.css'
import Footer from './components/share/Footer'
import Header from './components/share/Header'
import Sidbar from './components/share/Sidbar'
import UserContext from './context/UserContext'
import request from './tools/request'
import RouterMain from './tools/Router'

// همون دیتاها
export const Themes = {
  dark: { color: 'white', backgroundColor: 'black' },
  light: { color: 'black', backgroundColor: 'darkgray' }
}


export const lessons = [
  { name: 'Fizik', score: 17, id: 1 },
  { name: 'Shihmi', score: 15, id: 2 }
]

export const students = [
  { id: 1, name: 'Soheil' },
  { id: 2, name: 'Kasra' },
  { id: 3, name: 'GHazal' }
]
// همون کانتکست‌ها (طبق ارور: UserScore باید export بشه)
export const ThemeContext = createContext()
export const UserScore = createContext()

export default function App() {
  const [them, setTheme] = useState(Themes.dark)

  const [users, setUsers] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUsers(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  function loading() {
    return 'loading ...'
  }

  // Test services
  function loginmain() {
    request('/users/2')
      .then(res => {
        console.log(res.data)
        localStorage.setItem('userMain', JSON.stringify(res.data))

      })
  }
  // loginmain()


  function login() {
    request('/users/1')
      .then(res => {
        // localStorage.setItem('user', JSON.stringify(res.data))
        setUsers(res.data)
        // localStorage.setItem("user", JSON.stringify(res.data));
        // setUsers(res.data);
      })
      .finally(() => setIsLoading(false));
    setIsLoggedIn(true)


  }
  console.log(users)
  function logout() {
    localStorage.removeItem("user");
    setUsers({});
    // setUsers({})
    // setUsers('')
    setIsLoggedIn(false)
  }


  const toggleTheme = () => {
    setTheme(prev => (prev === Themes.dark ? Themes.light : Themes.dark))
    setChange(!change)
  }
  const value = { users, login, isLoading, setIsLoggedIn, isLoggedIn, logout, loading , students }
  return (
    <div className='all'>
      <Router>
        <UserContext.Provider value={value}>
          <button onClick={toggleTheme}>
            {them === Themes.dark ? 'Light' : 'Dark'}
          </button>

          <ThemeContext.Provider value={them}>
            <div>
              <Header />


              <div className="main">
                <Sidbar />

                <UserScore.Provider value={lessons}>
                  <RouterMain />
                </UserScore.Provider>
              </div>

              <Footer />
            </div>
          </ThemeContext.Provider>
        </UserContext.Provider>
      </Router>
    </div>
  )
}
