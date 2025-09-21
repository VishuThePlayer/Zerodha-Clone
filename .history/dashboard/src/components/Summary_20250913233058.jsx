import React from "react";

function Summary() {
  return (
    <div className="summary">
      {/* User Section */}
      <div className="user">
        <h2>Hi! User!</h2>
      </div>

      {/* Equity Section */}
      <div className="equity">
        <h2 className="equity-title">Equity</h2>

        <div className="equity-content">
          {/* Left Content */}
          <div className="equity-content-1">
            <h1>3.74k</h1>
            <p>Margin available</p>
          </div>

          {/* Right Content */}
          <div className="equity-content-2">
            <p>Margin used: 0</p>
            <p>Opening balance: 3.74k</p>
          </div>
        </div>
      </div>

      {/* Holding Section */}
      <div className="holding">
        <h2>Holding</h2>
      </div>
    </div>
  );
}

export default Summary;
