import React from 'react';
import './navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">New Game</a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">How to play</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
