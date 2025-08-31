import React from 'react';

function OpenAccount() {
  return ( 
    <section className="container d-flex flex-column align-items-center justify-content-center mt-5 pt-5">
      <h1 className="fs-3 text-center mb-3">Open a Zerodha account</h1>
      <p className="fs-5 text-center mb-4">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
      </p>
      <button 
        className="btn btn-primary py-2 px-4 fs-5"
        style={{ maxWidth: "250px", width: "100%" }}
        aria-label="Sign up for a free Zerodha account"
      >
        Sign up for free
      </button>
    </section>
  );
}

export default OpenAccount;
