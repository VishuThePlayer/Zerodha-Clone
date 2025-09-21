import React from 'react';
import Menu from './Menu';

function TopBar() {
  const handleLogin = () => {
    // Replace this with your real login flow
    console.log("Login clicked");
  };

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className='index'>Nifty 50</p>
          <p className='index.points'>{100.2}</p>
          <p className='percent'></p>
        </div>
        <div className="sensex">
          <p className='index'>Sensex</p>
          <p className='index.points'>{100.2}</p>
          <p className='percent'></p>
        </div>
      </div>

      <Menu />

      <div className="auth-container">
        <button className="btn btn-sm btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default TopBar;
