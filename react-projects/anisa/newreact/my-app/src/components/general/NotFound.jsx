import React, { useContext } from 'react'
import { ThemeContext } from '../../App'

export default function NotFound() {

  const theme = useContext(ThemeContext)

  return (
    <div style={theme} className='box content'>
        <h2>404</h2>
     <img src='https://www.bing.com/th/id/OIP.oWJIAicGJqPakt7etiG5ywHaFS?w=292&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'/>
    </div>
  )
}
