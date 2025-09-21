import React from 'react'

function Awards() {
    return ( 
        <div className="container text-center awards">
            <div className="ful_width row">
                <div className="col-12 col-lg-6 text-start">
                    <h2 className='fw-normal mb-5'>Trust with confidence</h2>
                    <div className='mb-5'>
                        <h3 className='fw-normal'>Customer-first always</h3>
                        <p className='fs-5 fw-light'>
                            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments,
                            making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
                        </p>
                    </div>
                    <div className='mb-5'>
                        <h3 className='fw-normal'>No spam or gimmicks</h3>
                        <p className='fs-5 fw-light'>
                            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you 
                            use at your pace, the way you like. Our philosophies.
                        </p>
                    </div>
                    <div className='mb-5'>
                        <h3 className='fw-normal'>The Zerodha universe</h3>
                        <p className='fs-5 fw-light'>
                            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you 
                            tailored services specific to your needs.
                        </p>
                    </div>
                    <div className='mb-3'>
                        <h3 className='fw-normal'>Do better with money</h3>
                        <p className='fs-5 fw-light'>
                            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but 
                            actively help you do better with your money.
                        </p>
                    </div>
                </div>

                <div className="col-12 col-lg-6 d-flex flex-column align-items-center mt-4 mt-lg-0">
                    <div>
                        <img 
                            style={{maxWidth: "103%"}}
                            src="https://zerodha.com/static/images/ecosystem.png" 
                            alt="Product" 
                            className="img-fluid product-img"
                        />
                    </div>
                    <div className='d-flex gap-4 gap-md-5 flex-wrap justify-content-center mt-3'>
                        <a 
                            className='fs-5'
                            href=""
                        >
                            Explore our products → 
                        </a>
                        <a 
                            className='fs-5'
                            href=""
                        >
                            Try Kite demo →
                        </a>
                    </div>
                </div>
            </div>

            <br />
            <br />

            <div className='mt-5'>
                <img 
                    src="https://zerodha.com/static/images/press-logos.png" 
                    alt=""
                    className="img-fluid mx-auto d-block press-logos"
                />
            </div>

            {/* Minimal, locally scoped CSS for responsive tweaks */}
            <style>{`
                /* Scope everything to this component */
                .awards .product-img {
                    height: auto;
                }
                /* Prevent horizontal overflow from inline maxWidth:103% on smaller screens */
                @media (max-width: 991.98px) {
                    .awards .product-img { 
        
                    }
                }
                /* Restore intended desktop exaggeration exactly as original */
                @media (min-width: 992px) {
                    .awards .product-img { 
                        max-width: 103% !important;
                    }
                }
                /* Ensure press logos scale and center nicely */
                .awards .press-logos {
                    height: auto;
                    max-width: 100%;
                }
            `}</style>
        </div>
     );
}

export default Awards;
