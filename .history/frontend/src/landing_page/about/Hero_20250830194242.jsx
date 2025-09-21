import React from 'react'

function Hero() {
    return (  
        <>
            <div 
              className="container d-flex flex-column justify-content-center align-items-center" 
              style={{ minHeight: "25vh" }}
            >
                <h1 className='text-center fw-medium fs-3'>
                    We pioneered the discount broking model in India. <br />
                    Now, we are breaking ground with our technology.
                </h1>

                {/* Line at the bottom */}
            </div>
            <div className="container flex align-items-center mb-5">
                <hr className="w-70 mt-4 fw-lighter" />
            </div>
            <div className="container mt-5">
                <div className="col-1">

                </div>
                <div className="col-2">

                </div>
            </div>
        </>
    );
}

export default Hero;
