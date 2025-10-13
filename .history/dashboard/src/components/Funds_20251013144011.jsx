import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GeneralContext } from "./GeneralContextProvider";

const Funds = () => {
  const { handleAddWindow, fundQuantity } = useContext(GeneralContext);

  return (
    <div className="funds">
      <p>Instant, zero-cost fund transfers with UPI</p>

      <div className="btns">
        <Link onClick={handleAddWindow} className="btn btn-green">
          Add Funds
        </Link>
        <Link className="btn btn-blue">Withdraw</Link>
      </div>

      <div className="fund-info">
        <div className="data">
          <p>Available Balance</p>
          <p className="imp">{fundQuantity ?? "4000"}</p>
        </div>
        <div className="data">
          <p>Used Margin</p>
          <p className="imp">0.00</p>
        </div>
        <div className="data">
          <p>Total Balance</p>
          <p className="imp">{fundQuantity ?? "4000"}</p>
        </div>
      </div>
    </div>
  );
};

export default Funds;
