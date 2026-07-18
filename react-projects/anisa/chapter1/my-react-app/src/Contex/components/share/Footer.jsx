// import React, { Component } from 'react'

// export default class Footer extends Component {
  
//   render() {
//     return (
//       <div className='box' style={this.props.them}>
//         <h2>Footer</h2>
//       </div>
//     )
//   }
// }

import { useContext } from 'react'
import { ThemContex } from '../../App'
import ProductManger from '../../context/ProductManger'

export default function Footer() {

  const them = useContext(ThemContex)
  const {numm} = useContext(ProductManger)

  return (
    <div className='box' style={them}>
      <h3>سبد خرید : {numm}</h3>
      <h2>Footer</h2>
      <a href="http://pornhub.com/">ارتباط با علی زربان</a>
    </div>
  )
}

