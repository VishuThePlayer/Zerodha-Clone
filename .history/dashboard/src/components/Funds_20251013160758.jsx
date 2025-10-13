
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GeneralContext } from "./GeneralContextProvider";
import { useContext } from "react";
import axios from "axios";
const Funds = () => {
  const { handleAddWindow, fundQuantity } = useContext(GeneralContext);
  const [funds, setFunds] = useState(0);
  const[isFunds, setIsFunds] = useState(false);

  useEffect(async() => {
    try {
      const response = await axios.get("http://localhost:5000/api/funds/");
      if(response.length > 0){
        setFunds(response[0].funds);
        setIsFunds(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  }, [])

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
              <p>Available Balanace</p>
              <p className="imp">{isFunds? <h1>Hello</h1 : h2>}</p>
            </div>
            <hr />
            <div className="data">
              <p>Used Balance</p>
              <p>4,043.10</p>
            </div>
            {/* <div className="data">
              <p>Payin</p>
              <p>4064.00</p>
            </div> */}
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
