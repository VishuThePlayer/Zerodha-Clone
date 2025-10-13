import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GeneralContext } from "./GeneralContextProvider";
import { useContext } from "react";
import axios from "axios";

const Funds = () => {
  const { handleAddWindow, fundsRefreshTrigger } = useContext(GeneralContext);
  const [funds, setFunds] = useState(0);
  const [isFunds, setIsFunds] = useState(false);

  useEffect(() => {
    const fetchFunds = async () => {
      try {
        setIsFunds(false);
        const response = await axios.get("https://zerodha-clone-d94u.vercel.app/api/funds/");
        if (response.data.success) {
          setFunds(response.data.data);
          setIsFunds(true);
        }
      } catch (error) {
        console.error("Error fetching funds:", error.message);
        setIsFunds(true);
      }
    };

    fetchFunds();
  }, [fundsRefreshTrigger]); // Now depends on fundsRefreshTrigger

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <div className="btns">
          <Link onClick={handleAddWindow} className="btn btn-green">Add funds</Link>
          <Link className="btn btn-blue">Withdraw</Link>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available Balance</p>
              {isFunds ? (
                <p className="imp">{funds}</p>
              ) : (
                <h1>Loading..</h1>
              )}
            </div>
            <hr />
            <div className="data">
              <p>Used Balance</p>
              <p>4,043.10</p>
            </div>
            <hr />
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;