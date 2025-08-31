import React from 'react'

function Hero() {
    return ( 
        <div>
            <div class="container">
                <div className="row">
                    <img className='mb-5' src="https://zerodha.com/static/images/landing.png" alt="" />
                </div>
                <div className='mt-5'>
                    <h2>Invest in everything</h2>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button>Signup Now</button>
                </div>
                <div class="grid grid-cols-4 gap-4">
                <div>01</div>
                <!-- ... -->
                <div>09</div>
                </div>
            </div>
        </div>
    );
}

export default Hero;