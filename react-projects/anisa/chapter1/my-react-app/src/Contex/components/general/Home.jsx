import React, { useContext } from 'react'
import { ThemContex } from '../../App'
import UserConytext from '../../context/UserContext'
import AppRoutes from '../../routes/AppRoutes'

export default function Home() {
  const them = useContext(ThemContex)
  const {isLogin , user} = useContext(UserConytext)
  return (
    <div className='content box' style={them}>
      {/* <h4> */}
        <AppRoutes />
      {/* </h4> */}
      {/* <h3>hello {user.name}</h3> */}
      {isLogin && <p style={{color:'green'}}>Welcome {user.name}</p>}
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint optio amet veritatis modi architecto officiis animi, libero tempore pariatur ipsum quasi commodi quisquam totam eum aliquid. Labore incidunt nobis iure!</p> */}
    </div>
  )
}
