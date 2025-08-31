import React from 'react';
import Product from './Product';
import {Link} from 'react-router-dom'

function Universe() {
    // Array of products (add more as needed)
    const products = [
        {
            img: "https://zerodha.com/static/images/partners/zerodhafundhouse.png",
            desc: "Our asset management venture creating simple and transparent index funds to help you save for your goals."
        },
        {
            img: "https://zerodha.com/static/images/products/sensibull-logo.svg",
            desc: "Another product with amazing benefits for investors and traders."
        },
        {
            img: "https://zerodha.com/static/images/partners/tijori.svg",
            desc: "AI-powered analytics to optimize your trading strategies."
        },
        {
            img: "https://zerodha.com/static/images/products/streak-logo.png",
            desc: "Seamless integration with top financial platforms."
        },
        {
            img: "https://zerodha.com/static/images/products/smallcase-logo.png",
            desc: "Educational resources to make investing easier."
        },
        {
            img: "https://zerodha.com/static/images/products/ditto-logo.png",
            desc: "Advanced tools for risk management and forecasting."
        }
    ];

    return ( 
        <div className="container mt-5">
            <h3 className="text-center fw-normal fs-4">
                Want to know more about our technology stack? 
                Check out the <a href="https://zerodha.tech" target="_blank" rel="noopener noreferrer">Zerodha.tech</a> blog.
            </h3>

            <div className="container mt-5">
                <br />
                <br />
                <br />
                <h2 className="fw-medium text-center mb-4">The Zerodha Universe</h2>
                <p className="text-center text-muted fs-5">
                    Extend your trading and investment experience even further with our partner platforms
                </p>

                {/* Render products in rows of 3 */}
                <div className="row mt-5">
                    {products.map((product, index) => (
                        <div className="col-md-4" key={index}>
                            <Product img={product.img} desc={product.desc} />
                        </div>
                    ))}
                </div>
                <br />
                <Link to={"https://zerodha.com/open-account/"} class="button">Sign up for free</Link>
            </div>
        </div>
    );
}

export default Universe;
