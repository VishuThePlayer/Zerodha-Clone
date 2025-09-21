import React from 'react';

function Hero() {
    return ( 
        <>
            <div className="mb-5">
                <img
                    clas
                    src="https://zerodha.com/static/images/landing.png" 
                    alt="Hero_Img" 
                />
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center text-center">
                <h1>Invest in everything</h1>
                <p>
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, 
                    bonds, and more.
                </p>
                <button className="btn btn-primary mt-3">
                    Sign up for free
                </button>
            </div>
        </>
    );
}

export default Hero;
