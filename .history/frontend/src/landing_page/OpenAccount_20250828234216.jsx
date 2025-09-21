import React from 'react'

function OpenAccount() {
    return ( 
        <>
            <br />
            <br />
            <br />
            <br />
            <div className="container d-flex flex-column mt-5">
                <h1 className='fs-3 text-center mb-4'>Open a Zerodha account</h1>
                <p className='fs-5 text-center'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button style={{width: "15%", margin: "0 auto", backgroundColor: "#387ed1", fontSize: ""}} className="btn btn-primary py-2 mt-4 fs-5 mb-5">
                    Sign up for free
                </button>
            </div>
        </>
     );
}

export default OpenAccount;