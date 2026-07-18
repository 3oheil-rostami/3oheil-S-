import React, { useContext } from 'react'
import { ThemeContext } from '../../App'

export default function Footer({esm , family}) {
  const theme = useContext(ThemeContext)
  return (
    <div className='box' style={theme}>
      <h2>Your Welcom {esm}</h2>
        Footer
      <h2>Bye {family}</h2>
      
    </div>
  )
}
