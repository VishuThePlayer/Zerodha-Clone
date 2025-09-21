import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 py-2">
      <div className="container d-flex justify-content-between align-items-center">
        
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src="https://zerodha.com/static/images/logo.svg" alt="logo" style={{height: "40px"}} />
        </Link>

        {/* Nav links */}
        <div className="d-flex align-items-center gap-3">
          <Link className="nav-link text-dark" to="/signup">Signup</Link>
          <Link className="nav-link text-dark" to="/about">About</Link>
          <Link className="nav-link text-dark" to="/products">Products</Link>
          <Link className="nav-link text-dark" to="/pricing">Pricing</Link>
          <Link className="nav-link text-dark" to="/support">Support</Link>

          {/* Login button */}
          <Link to="/login" className="btn btn-primary btn-sm">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
