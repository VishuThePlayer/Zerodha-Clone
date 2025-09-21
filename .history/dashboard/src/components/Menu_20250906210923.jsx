import React, { useEffect, useRef, useState } from "react";

function Menu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click, ESC, or when resizing to desktop
  useEffect(() => {
    function onDocClick(e) {
      if (open && ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    function onResize() {
      if (window.innerWidth > 720) setOpen(false);
    }
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

      {/* Mobile toggle (hidden on desktop) */}
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="menu-drawer"
        aria-label="Toggle menu"
        type="button"
        onClick={() => setOpen((v) => !v)}
      >
        {/* hamburger icon */}
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Right: Menu + user (turns into a drawer on mobile) */}
      <div className="menu-right" id="menu-drawer">
        <ul className="menu-list" onClick={() => setOpen(false)}>
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

      {/* Backdrop (mobile only, shown when open) */}
      {open && <button className="menu-backdrop" aria-hidden="true" tabIndex={-1} onClick={() => setOpen(false)} />}
    </div>
  );
}

export default Menu;
