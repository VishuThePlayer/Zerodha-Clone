import React from 'react';

function Hero() {
    return ( 
        <div class="btn-group-vertical" role="group" aria-label="">
            <button type="button" class="btn btn-secondary">First One</button>
            <button type="button" class="btn btn-secondary">Second One</button>
            <div class="btn-group" role="group">
                <button
                    id="dropdownId"
                    type="button"
                    class="btn btn-secondary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    More
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownId">
                    <a class="dropdown-item" href="#">First Dropdown</a>
                    <a class="dropdown-item" href="#">Second Dropdown</a>
                </div>
            </div>
        </div>
        
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
                <p className='fs-4'>
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, 
                    bonds, and more.
                </p>
                <button className="btn btn-primary mt-3 py-2 px-4 fs-4 mt-4">
                    Sign up for free
                </button>
            </div>
        </>
    );
}

export default Hero;
