import React from 'react';
import { holdings } from '../data'; // ✅ Import your data
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
function Summary() {
  // ✅ Calculate summary dynamically
  const totalInvestment = holdings.reduce((sum, stock) => sum + stock.avg * stock.qty, 0);
  const currentValue = holdings.reduce((sum, stock) => sum + stock.price * stock.qty, 0);
  const marginAvailable = 3740; // Example, can be state/prop
  const openingBalance = 3740;  // Example, can be state/prop

  return ( 
    <>
      <div className="summary">
        {/* ✅ User Section */}
        <div className="user">
          <div className="user-text">
            <h2>Hi! User!</h2>
          </div>
        </div>

        {/* ✅ Equity Section */}
        <div className="Equity">
          <div className="Equity-text-1">
            <DataSaverOffIcon/>
            <h2 style={{fontWeight: "400"}}>Equity</h2>
          </div>
          <div className="equity-content">
            <div className="equity-content-1">
              <div className="equity-number">
                <h1 style={{fontWeight: "400"}}>{(marginAvailable / 1000).toFixed(2)}k</h1>
              </div>
              <div className="equity-number">
                <p>Margin Available</p>
              </div>
            </div>
            <div className="equity-content-2">
              <p>Margin used <span st>0</span> </p>
              <p>Opening balance {openingBalance.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* ✅ Holdings Summary */}
        <div className="Holding">
          <div className="Equity-text">
            <h2>Holding</h2>
          </div>
          <div className="equity-content">
            <div className="equity-content-1">
              <div className="equity-number">
                <h1 style={{fontWeight: "400"}}>{(currentValue / 1000).toFixed(2)}k</h1>
              </div>
            </div>
            <div className="equity-content-2">
              <p>Current Value {currentValue.toFixed(2)}</p>
              <p>Investment {totalInvestment.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Summary;
