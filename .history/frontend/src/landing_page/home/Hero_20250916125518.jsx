import React from 'react';
import "../home.css"
import {Link} from "r"

function Hero() {
    return ( 
        <div className='container'>
            <div className="mt-5 mb-5 row text-center">
                <img 
                    style={{maxWidth: "88%"}}
                    src="https://zerodha.com/static/images/landing.png" 
                    alt="Hero_Img" 
                    className="img-fluid mx-auto d-block mb-4"
                />

                <h2>Invest in everything</h2>
                <p className='fs-4'>
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, 
                    bonds, and more.
                </p>
                <Link></Link>
            </div>
        </div>
    );
}

export default Hero;
