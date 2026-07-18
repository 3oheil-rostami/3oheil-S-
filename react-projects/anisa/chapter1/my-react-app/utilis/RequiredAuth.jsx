import { useContext } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import UserConytext from "../src/Contex/context/UserContext"


export default function RequiredAuth() {

  const {isLogin} = useContext(UserConytext)  
  const location = useLocation()
  console.log(location)

  if(!isLogin) {
    return <Navigate to={'/login'} state={{from : location.pathname}}/>
  }
  
    return <Outlet />
}

