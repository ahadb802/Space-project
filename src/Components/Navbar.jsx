import React from 'react'
import {
  Link
} from "react-router-dom";
import logo from '../Media/planet.png'

export default function Navbar() {
  return (
    <header>
      <div className='logo-container'>
        <img src={logo} className='logo' alt="logo-img" />
        <h1 className='title'>Space Traveler's Hub</h1>
      </div>
      <nav>
        <ul className='navbar'>
          <li>
            <Link exact className='active' to="/">Rockets</Link>
          </li>
          <li>
            <Link to="/missions">Missions</Link>
          </li>
          <li>
            <Link to="/profile">My Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
