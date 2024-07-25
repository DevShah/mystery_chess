import React from 'react';
import './navbar.css';

export const Navbar = ({onHover}) => {
  return (
    <nav className="navbar" onClick={onHover}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">New Game</a>
        </li>
        <li className="nav-item">
          <div className="nav-link">How to play
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
