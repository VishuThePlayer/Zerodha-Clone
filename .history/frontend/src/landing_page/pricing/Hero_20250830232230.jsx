import React from 'react';
import Info from './Info';

function Hero() {
    return ( 
        <>
            <div className="container-lg d-flex flex-column justify-content-center align-items-center text-center mt-5">
                <br />
                <br />
                <br />
                <br />
                <div>
                    <h3 className="fs-2 fw-normal mb-2">Charges</h3>
                    <p className="fs-4 text-muted mb-5">List of all charges and taxes</p>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="row">
                    <div className="col">
                        <Info 
                            Title="Free equity delivery" 
                            Description="All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage." 
                            Img="https://zerodha.com/static/images/pricing-eq.svg" 
                        />
                    </div>
                    <div className="col">
                        <Info 
                            Title="Free equity delivery" 
                            Description="All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage." 
                            Img="https://zerodha.com/static/images/other-trades.svg" 
                        />
                    </div>
                    <div className="col">
                        <Info 
                            Title="Free equity delivery" 
                            Description="All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage." 
                            Img="https://zerodha.com/static/images/pricing-eq.svg" 
                        />
                    </div>
                    
                </div>
            </div>
        </>
     );
}

export default Hero;
