// routes/AppRoutes.jsx
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Music from '../pages/MusicPlayer'

import Login from '../../../auth/LoginForm'
import Dashboard from '../../../user/Dashboard'
import Profile from '../../../user/Profile'
import RequiredAuth from '../../../utilis/RequiredAuth'
import ArticelRouter from '../components/articles/ArticelRouter'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Prodcut from '../pages/Prodcut'
import Tamas from '../pages/Tamas'
import TodoList from '../pages/TodoList'
import Card from '../pages/Card'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/product' element={<Prodcut />}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="contact/:id" element={<Card />} />
      <Route path='/article/*' element={<ArticelRouter />}/>
      {/* <Route path='/articles' element={<List />} />
      <Route path='/article/:id' element={<Deteail />} /> */}
      <Route path='/login' element={<Login />} />
      <Route path='/tamas' element={<Tamas />}/>
      <Route path='/soheil' element={<Soheil />}/>
      <Route path='/Music' element={<Music/>}/>
      <Route path='/todo' element={<TodoList />}/>
      <Route element={<RequiredAuth/>}>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Route>
      {/* <Route path='/profile' element={<RequiredAuth>

        <Profile />

      </RequiredAuth>} />
      <Route path='/dashboard' element={<RequiredAuth component={<Dashboard />} />} /> */}


      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
// function Soheil () {
  
//   return <h1>Soheil Rostami is a front-end Developer</h1>
// }
// import React from 'react'

function Soheil() {
  return (
    <div>
      <h1>Soheil Rostami is a front-end Developer 01010101</h1>
    </div>
  )
}
