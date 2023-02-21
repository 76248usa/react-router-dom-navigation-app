import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      <NavLink 
      to='/' >
        Home
      </NavLink>
      <NavLink to='/about'
       >About</NavLink>
      <NavLink to='/products' 
      className={({isActive})=>isActive?'link active': 'link'}>Products</NavLink>
      <NavLink to='/login' 
      className={({isActive})=>isActive?'link active': 'link'}>Login</NavLink>
    </nav>
  )
}

export default Navbar
