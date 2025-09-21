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
            <div className="container align-items-center mb-5">
                <hr className="w-70 mt-4 fw-lighter" />
            </div>
            <div className="container row mt-5 d-flex align-items-center m-">
                <div className="col-5 p-5">
                    <p>
                            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.

                            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.

                            Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>
                <div className="col-5 p-5">
                    <p>
                            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.

                            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.

                            Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Hero;
