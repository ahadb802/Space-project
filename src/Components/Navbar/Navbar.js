import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Media/planet.png';
import './Navbar.css';

export default function Navbar() {
  const check = ({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
    fontWeight: isActive ? 'bold' : 'normal',
  });

  return (
    <header>
      <div className="navbar-contanier">
        <div className="logo-container">
          <img src={logo} className="logo" alt="logo-img" />
          <h1 className="title">Space Travelers Hub</h1>
        </div>
        <nav>
          <ul className="navbar">
            <li>
              <NavLink style={check} to="/">Rockets</NavLink>
            </li>
            <li>
              <NavLink style={check} to="/missions">Missions</NavLink>
            </li>
            <li>
              <NavLink style={check} to="/profile">My Profile</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
