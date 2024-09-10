import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = (props) => {
  return (
    <>
    <div className="nav">
      <div className='navbar'>
        <Link>Start BootStrap</Link>
        <ul>
          <li>
            <Link to={'/'}>
              Home
            </Link>
          </li>
          <li>
            <Link to={'/about'}>
              About
            </Link>
          </li>
          <li>
            <Link to={'/sample'}>
              Sample Post
            </Link>
          </li>
          <li>
            <Link to={'/contact'}>
              Contact
            </Link>
          </li>
          <li>
            <Link to={'/login'}>
              Login
            </Link>
          </li>
        </ul>
      </div>

      <div style={{ backgroundImage: `url(${props.bgimage})` }} className='main'>
        <h1>{props.title}</h1>
        <span>{props.subtitle}</span>
      </div>
    </div>
    </>
  )
}

export default Header
