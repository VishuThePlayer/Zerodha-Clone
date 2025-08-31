import React from 'react'


function Awards() {
    return ( 
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <h2>Trust with confidence</h2>
                    <h3>Customer-first always</h3>
                    <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <h3>No spam or gimmicks</h3>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    <h3></h3>
                
                </div>
                <div className="col">
                    <img 
                        style={{maxWidth: "85%"}}
                        src="https://zerodha.com/static/images/ecosystem.png" 
                        alt="Product" 
                    />
                </div>
            </div>
        </div>
     );
}

export default Awards;