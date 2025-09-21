import React from 'react'

function Hero() {
    return (  
        <>
            <div 
              className="container " 
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
        </>
    );
}

export default Hero;
