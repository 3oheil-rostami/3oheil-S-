import React, { Component, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ThemContex } from '../../App'
import ProductManger from '../../context/ProductManger'

export default class Sidebar extends Component {

  render() {
    return (
      <div className='sidebar box' style={this.props.them}>
        <h3>Sidebar</h3>
        <h2>سبد خرید : {this.props.numm}</h2>
        <ul>
            {/* <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link> */}
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
              <NavLink to={'/product'}>Prodcut</NavLink>
            </li>
            <li>
              <NavLink to={'/Contact'}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={'/article'}>Articles</NavLink>
            </li>
            <li>
              <NavLink to={'/profile'}>Profile</NavLink>
            </li>
             <li>
              <NavLink to={'/dashboard'}>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to={'/tamas'}>Tamas</NavLink>
            </li>
            <li>
              <NavLink to={'/todo'}>TodoList</NavLink>
            </li>
            <li>
              <NavLink to={'/music'}>Music Player</NavLink>
            </li>
          
        </ul>
      </div>
    )
  }
}
