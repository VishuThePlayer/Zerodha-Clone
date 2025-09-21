import { useEffect, useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./AuthGuard";

function Menu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { user, setUser } = useContext(AuthContext); // ✅ get setUser to clear on logout

  const handleLogout = async () => {
    try {
      await axios.post("http://192.168.1.9:5000/api/auth/logout", {}, { withCredentials: true });
      setUser(null);
      window.location.href = "/login"; // redirect to login page
      window.location.reload();
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

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
    <div className={`menu-container${open ? " open" : ""}`} role="navigation" aria-label="Main" ref={ref}>
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

      {/* Right: Menu + user */}
      vishubistsa@gmail.com

      {/* Backdrop (mobile) */}
      {open && <button className="menu-backdrop" aria-hidden="true" tabIndex={-1} onClick={() => setOpen(false)} />}
    </div>
  );
}

export default Menu;
