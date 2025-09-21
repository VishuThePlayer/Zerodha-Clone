import React from 'react';

function Hero() {
    return ( 
        <>
            <div className="mb-5">
                <img 
                    style={{maxWidth: "55%"}}
                    src="https://zerodha.com/static/images/landing.png" 
                    alt="Hero_Img" 
                    className="img-fluid mx-auto d-block mb-4"
                />

            </div>

            <div className="d-flex flex-column justify-content-center align-items-center text-center">
                <h2>Invest in everything</h2>
                <p>
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, 
                    bonds, and more.
                </p>
                <button className="btn btn-primary mt-3 py-2 ">
                    Sign up for free
                </button>
            </div>
        </>
    );
}

export default Hero;
