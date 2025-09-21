import React from "react";

function Menu() {
  return (
    <div className="menu-container">
      <nav className="navbar navbar-expand p-0">
        <div className="container-fluid p-0">
          {/* Toggler for small screens */}
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainMenu"
            aria-controls="mainMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="mainMenu" className="collapse navbar-collapse">
            {/* Centered menu items */}
            <ul className="navbar-nav mx-auto gap-lg-4">
              <li className="nav-item"><a className="nav-link active" href="#">Dashboard</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Orders</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Holdings</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Positions</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Funds</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Apps</a></li>
            </ul>

            {/* Right side: divider + avatar + userid */}
            <div className="d-none d-lg-flex align-items-center ms-auto">
              <div className="vr mx-3 opacity-25"></div>
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle bg-light border d-flex justify-content-center align-items-center"
                  style={{ width: 32, height: 32 }}
                >
                  <span className="text-uppercase small fw-semibold">ZU</span>
                </div>
                <span className="ms-2 text-muted small">USERID</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
