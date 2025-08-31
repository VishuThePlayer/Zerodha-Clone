import React from 'react';

function Hero() {
    return ( 
        <div className='container mt'>
            <div className="mb-5 row text-center">
                <img 
                    style={{maxWidth: "85%"}}
                    src="https://zerodha.com/static/images/landing.png" 
                    alt="Hero_Img" 
                    className="img-fluid mx-auto d-block mb-4"
                />

                <h2>Invest in everything</h2>
                <p className='fs-4'>
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, 
                    bonds, and more.
                </p>
                <button style={{width: "15%", margin: "0 auto"}} className="btn btn-primary py-2 mt-4 fs-4">
                    Sign up for free
                </button>
            </div>
        </div>
    );
}

export default Hero;
