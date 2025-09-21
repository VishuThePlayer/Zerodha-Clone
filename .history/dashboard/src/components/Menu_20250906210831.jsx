import React from "react";

function Menu() {
  return (
    <div className="menu-container" role="navigation" aria-label="Main">
      {/* Left: Logo */}
      <a className="menu-logo" href="/">
        {/* Simple inline logo (replace with your SVG/img if you want) */}
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
          <path d="M4 6h8l-4 6 4 6H4z" fill="url(#g)" />
          <path d="M13 12l7-6v12z" fill="#dc2626" />
        </svg>
      </a>

      {/* Right: Menu + user */}
      <div className="menu-right">
        <ul className="menu-list">
          <li><button type="button" className="menu-link">Dashboard</button></li>
          <li><button type="button" className="menu-link">Orders</button></li>
          <li><button type="button" className="menu-link">Holdings</button></li>
          <li><button type="button" className="menu-link">Positions</button></li>
          <li><button type="button" className="menu-link">Funds</button></li>
          <li><button type="button" className="menu-link">Apps</button></li>
        </ul>

        <div className="menu-divider" aria-hidden="true"></div>

        <div className="user">
          <div className="avatar" aria-hidden="true">ZU</div>
          <span className="user-id">USERID</span>
        </div>
      </div>
    </div>
  );
}

export default Menu;
