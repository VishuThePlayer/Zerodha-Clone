import React from 'react';

function Hero() {
    return ( 
        <div className='container hero'>
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
                <button
                    className="btn btn-primary py-2 mt-4 fs-4 mb-5 cta-btn mx-auto d-block"
                    style={{ margin: "0 auto" }}
                >
                    Sign up for free
                </button>
            </div>

            {/* Minimal, locally scoped CSS for responsive width on the button */}
            <style>{`
                /* Scope all changes to this component only */
                .hero .cta-btn {
                    width: 100%;
                    min-height: 44px; /* Ensures comfortable tap target on mobile */
                }

                /* sm ≥576px */
                @media (min-width: 576px) {
                    .hero .cta-btn { width: 50%; }
                }

                /* md ≥768px */
                @media (min-width: 768px) {
                    .hero .cta-btn { width: 30%; }
                }

                /* lg ≥992px — preserve original desktop look (approx 15% width) */
                @media (min-width: 992px) {
                    .hero .cta-btn { width: 15%; }
                }
            `}</style>
        </div>
    );
}

export default Hero;
