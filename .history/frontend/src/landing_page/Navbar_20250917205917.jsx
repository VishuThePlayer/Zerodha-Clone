import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const handleLogin = () => {
    console.log("Login clicked");
    // Redirect to login page or open modal
  };

  return ( 
    <nav className="navbar navbar-expand-lg p-2 sticky-top bg-white shadow-sm">
      <div className="container justify-content-between">
        {/* Brand / Logo */}
        <Link className="fs-1 navbar-brand" to="/">
          <img style={{width: "25%"}} src="https://zerodha.com/static/images/logo.svg" alt="logo" />
        </Link>

        {/* Toggle button for mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="fs-5 navbar-nav ms-auto gap-3 mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>

            {/* Dropdown Menu */}
            {/* <li className="nav-item dropdown">
              <Link 
                className="nav-link dropdown-toggle" 
                to="#" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                <i className="fa-solid fa-sort-down"></i>
              </Link>
              <ul className="dropdown-menu">
                <li className="dropdown-item">Hello</li>
                <li className="dropdown-item">Hallo</li>
              </ul>
            </li> */}

            {/* Login Button */}
            <li className="nav-item">
  <Link
    to="/dashboard"
    className="btn btn-primary btn-sm fw-bold px-4 py-2 rounded-pill shadow-sm"
    style={{
      display: "inline-block", // ✅ Link behaves like button
      transition: "all 0.2s ease-in-out",
      textDecoration: "none", // ✅ Remove underline
      color: "white", // ✅ Text color same as button
    }}
    onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
    onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
  >
    Login
  </Link>
</li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
