import React from "react";
import Menu from "./Menu";

function TopBar() {
  // Example: add 'is-up' or 'is-down' for color states
  const niftyState = "is-up";
  const sensexState = "is-down";

  return (
    <header className="topbar" role="banner" aria-label="Market top bar">
      <div className="indices" role="group" aria-label="Market indices">
        <div className={`ticker ${niftyState}`}>
          <p className="name">Nifty 50</p>
          <p className="points">{100.2}</p>
          <p className="percent">+0.35%</p>
        </div>

        <div className={`ticker ${sensexState}`}>
          <p className="name">Sensex</p>
          <p className="points">{100.2}</p>
          <p className="percent">-0.18%</p>
        </div>
      </div>

      <Menu />
    </header>
  );
}

export default TopBar;
