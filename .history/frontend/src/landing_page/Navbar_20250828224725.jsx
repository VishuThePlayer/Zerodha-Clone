import React from 'react';

function Navbar() {
  return ( 
    <div className='container'>
      <nav className="navbar navbar-expand-lg p-2">
        <div className="container-fluid">
          {/* Brand / Logo */}
          <a className="fs-1 navbar-brand" href="#">
            <img style={{width: "25%"}} src="https://zerodha.com/static/images/logo.svg" alt="logo" />
          </a>

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
            <ul className="fs-5 navbar-nav ms-auto gap-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Signup</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Support</a>
              </li>

              {/* Dropdown Menu */}
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle" 
                  href="#" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  <i class="fa-solid fa-sort-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <div className='container'>
                    <div className="row">
                      <div className="col-2">
                        <h1>Image1</h1>
                        <h2>Image2</h2>
                      </div>
                      <div className="col-1">
                          <h1>image 2</h1>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
