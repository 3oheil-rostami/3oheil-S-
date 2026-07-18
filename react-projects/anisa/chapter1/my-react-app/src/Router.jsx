import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import Home from './Home'

export default function Router() {
  return (
    <div>
        {/* <h1>Soheil</h1> */}
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path='/about' element={<h1>About page</h1>}>
            
        </Route>

        
      </Routes>
    </div>
  )
}