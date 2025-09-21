import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {AuthContext}  from "./AuthGuard";


function Menu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { user, loading } = useContext(AuthContext);
  // Close on outside click / ESC / resize-to-desktop
  
  useEffect(() => {
    const onDocClick = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 720 && setOpen(false);
    document.addEventListener("click", onDocClick);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("click", onDocClick);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <div
      className={`menu-container${open ? " open" : ""}`}
      role="navigation"
      aria-label="Main"
      ref={ref}
    >
      {/* Left: Logo */}
      <a className="menu-logo" href="/" aria-label="Home">
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
        <span className="menu-brand">Kite</span>
      </a>

      {/* Mobile toggle */}
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="menu-drawer"
        aria-label={open ? "Close menu" : "Open menu"}
        type="button"
        onClick={() => setOpen((v) => !v)}
      >
        {/* hamburger / close */}
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
      </button>

      {/* Right: Menu + user (becomes a drawer on mobile) */}
      <div className="menu-right" id="menu-drawer">
        <ul className="menu-list" onClick={() => setOpen(false)}>
          <li>
            <Link to="/" className="menu-link" aria-current="page">Dashboard</Link>
          </li>
          <li>
            <Link to="/orders" className="menu-link">Orders</Link>
          </li>
          <li>
            <Link to="/holdings" className="menu-link">Holdings</Link>
          </li>
          <li>
            <Link to="/positions" className="menu-link">Positions</Link>
          </li>
          <li>
            <Link to="/funds" className="menu-link">Funds</Link>
          </li>
          <li>
            <Link to="/apps" className="menu-link">Apps</Link>
          </li>
        </ul>

        <div className="menu-divider" aria-hidden="true"></div>

        <div className="user">
          <div className="avatar" aria-hidden="true">
            {user.username.slice(0, 1).toUpperCase()}
          </div>
          <span className="user-id">{user.username}</span>

          {/* Logout button */}
          <button
            onClick={logout}
            style={{
              marginLeft: "10px",
              padding: "4px 8px",
              fontSize: "0.9rem",
              cursor: "pointer",
              borderRadius: "4px",
              border: "none",
              backgroundColor: "#ef4444",
              color: "white",
            }}
          >
            Logout
          </button>
    </div>

      {/* Backdrop (mobile) */}
      {open && (
        <button
          className="menu-backdrop"
          aria-hidden="true"
          tabIndex={-1}
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
}

export default Menu;
