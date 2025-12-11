
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <nav>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🔥 Jordan Charcoal
        </Link>

        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/contact" className="get-quote-btn">Get Quote</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;