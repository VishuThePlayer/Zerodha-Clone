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
      <div className="menu-right" id="menu-drawer">
        <ul className="menu-list" onClick={() => setOpen(false)}>
          <li><Link to="/" className="menu-link" aria-current="page">Dashboard</Link></li>
          <li><Link to="/orders" className="menu-link">Orders</Link></li>
          <li><Link to="/holdings" className="menu-link">Holdings</Link></li>
          <li><Link to="/positions" className="menu-link">Positions</Link></li>
          <li><Link to="/funds" className="menu-link">Funds</Link></li>
          <li><Link to="/apps" className="menu-link">Apps</Link></li>
        </ul>

        <div className="menu-divider" aria-hidden="true"></div>
        <div className="user relative inline-block text-left">
  <div className="flex flex-ro items-center space-x-2">
    {/* Avatar */}
    <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
      {user?.username?.slice(0, 1).toUpperCase()}
    </div>
    {/* Username */}
    <span className="font-semibold">{user?.username}</span>
    
    {/* Dropdown button */}
    <div className="relative">
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        onClick={() => setOpen((v) => !v)}
      >
        ▼
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-50">
          <div className="py-1">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
          {/* Optional extra actions */}
          {/* <div className="py-1">
            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Profile
            </button>
          </div> */}
        </div>
      )}
    </div>
  </div>
</div>



      </div>

      {/* Backdrop (mobile) */}
      {open && <button className="menu-backdrop" aria-hidden="true" tabIndex={-1} onClick={() => setOpen(false)} />}
    </div>
  );
}

export default Menu;
