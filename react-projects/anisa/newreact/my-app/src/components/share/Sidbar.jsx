import React, { useContext } from 'react'
import { ThemeContext } from '../../App'
import { NavLink } from 'react-router-dom'

export default function Sidbar() {
  const theme = useContext(ThemeContext)

  console.log(theme)
  return (
    <div className='sidebar box' style={theme}>
      <h4>Sidebar</h4>
      <div>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/articels'>Articles</NavLink>
          </li>
          <li>
            <NavLink to={'/about'}>About</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={'/panel'}>Panel</NavLink>
          </li>
          <li>
            <NavLink to={'/test'}>Test</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
