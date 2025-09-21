import { useEffect, useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./AuthGuard";

function Menu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://192.168.1.9:5000/api/auth/logout",
        {},
        { withCredentials: true }
      );
      setUser(null);
      window.location.href = "/login";
      window.location.reload();
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

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
    <nav
      ref={ref}
      className="relative bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8"
    >
      <div className="flex justify-between h-16 items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <svg width="28" height="28" viewBox="0 0 24 24" className="text-orange-500">
            <defs>
              <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>
            <path d="M4 6h8l-4 6 4 6H4z" fill="url(#g)" />
            <path d="M13 12l7-6v12z" fill="#dc2626" />
          </svg>
          <span className="font-bold text-lg text-gray-900">Kite</span>
        </Link>

        {/* Mobile toggle */}
        <div className="sm:hidden">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden sm:flex sm:items-center sm:space-x-6">
          <Link to="/" className="text-gray-700 hover:text-orange-500 font-medium">
            Dashboard
          </Link>
          <Link to="/orders" className="text-gray-700 hover:text-orange-500 font-medium">
            Orders
          </Link>
          <Link to="/holdings" className="text-gray-700 hover:text-orange-500 font-medium">
            Holdings
          </Link>
          <Link to="/positions" className="text-gray-700 hover:text-orange-500 font-medium">
            Positions
          </Link>
          <Link to="/funds" className="text-gray-700 hover:text-orange-500 font-medium">
            Funds
          </Link>
          <Link to="/apps" className="text-gray-700 hover:text-orange-500 font-medium">
            Apps
          </Link>

          {/* User dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                {user?.username?.[0].toUpperCase()}
              </div>
              <span className="font-medium">{user?.username}</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden mt-2 space-y-2 px-2 pb-3">
          <Link to="/" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
            Dashboard
          </Link>
          <Link to="/orders" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
            Orders
          </Link>
          <Link to="/holdings" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
            Holdings
          </Link>
          <Link to="/positions" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
            Positions
          </Link>
          <Link to="/funds" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
            Funds
          </Link>
          <Link to="/apps" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
            Apps
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left px-3 py-2 rounded-md text-red-600 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Menu;
