import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar modern-style">
      <div id="logo">
        <img src="/diet.png" alt="logo" width={50} />
        <h2>Flavorythm</h2>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;