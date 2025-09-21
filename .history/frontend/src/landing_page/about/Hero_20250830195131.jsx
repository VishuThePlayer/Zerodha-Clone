import React from 'react'

function Hero() {
    return (  
        <>
            {/* Hero Section */}
            <div 
                className="container d-flex flex-column justify-content-center align-items-center border-bottom border-secondary border-opacity-25 pb-3 mb-5" 
                style={{ minHeight: "25vh" }}
                >
                <h1 className="text-center fw-medium fs-3">
                    We pioneered the discount broking model in India. <br />
                    Now, we are breaking ground with our technology.
                </h1>
            </div>


            {/* Two Columns Section */}
            <div className="container">
                <div className="row justify-content-center text-start">
                    <div style={{fontSize: "30px"}} className="col-md-5 p-4">
                        <p>
                            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                        </p>
                        <p>
                            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                        </p>
                        <p>
                            Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                        </p>
                    </div>
                    <div className="col-md-5 p-4">
                        <p>
                            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                        </p>
                        <p>
                            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                        </p>
                        <p>
                            Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
