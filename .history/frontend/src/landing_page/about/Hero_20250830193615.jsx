import React from 'react'

function Hero() {
    return (  
        <>
            <div 
              className="container d-flex flex-column justify-content-center align-items-center" 
              style={{ minHeight: "25vh" }}
            >
                <h1 className='text-center'>
                    We pioneered the discount broking model in India. <br />
                    Now, we are breaking ground with our technology.
                </h1>

                {/* Line at the bottom */}
            </div>
            <div className="container flex">
                <hr className="w-70 mt-4" />
            </div>
        </>
    );
}

export default Hero;
