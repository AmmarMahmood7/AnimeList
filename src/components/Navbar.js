import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="OurLogo" className='logo' />
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <Link to='/about'>About</Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
