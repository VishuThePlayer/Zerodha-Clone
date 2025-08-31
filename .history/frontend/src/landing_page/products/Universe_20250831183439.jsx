import React from 'react';
import Product from './Product';

function Universe() {
    const products = [
        {
            link: "https://www.zerodhafundhouse.com/",
            img: "https://zerodha.com/static/images/partners/zerodhafundhouse.png",
            imgClass: "zfh-logo",
            desc: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
        },
        {
            link: "https://streak.tech",
            img: "/static/images/products/streak-logo.png",
            imgClass: "streak-logo",
            desc: "Systematic trading platform that allows you to create and backtest strategies without coding."
        },
        {
            link: "https://sensibull.com",
            img: "/static/images/products/sensibull-logo.png",
            imgClass: "sensibull-logo",
            desc: "Options trading platform that helps you trade options with strategies, tools, and insights."
        },
        {
            link: "https://smallcase.com",
            img: "/static/images/products/smallcase-logo.png",
            imgClass: "smallcase-logo",
            desc: "Thematic investment platform that lets you buy portfolios of stocks built around ideas."
        },
        {
            link: "https://www.tijorifinance.com",
            img: "/static/images/products/tijori-logo.png",
            imgClass: "tijori-logo",
            desc: "Platform offering detailed research and insights into companies and sectors."
        },
        {
            link: "https://www.zerodha.com/varsity",
            img: "/static/images/products/varsity-logo.png",
            imgClass: "varsity-logo",
            desc: "Learn investing and trading concepts with the most comprehensive free resource available."
        }
    ];

    return (
        <div className="container mt-5">
            <h3 className="text-center fw-normal fs-4">
                Want to know more about our technology stack? 
                Check out the <a href="https://zerodha.tech" target="_blank" rel="noopener noreferrer">Zerodha.tech</a> blog.
            </h3>

            <div className="container mt-5">
                <h2 className="text-center mb-4">The Zerodha Universe</h2>
                <p className="text-center text-muted fs-5">
                    Extend your trading and investment experience even further with our partner platforms
                </p>

                <div className="row">
                    {products.map((product, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <Product
                                link={product.link}
                                img={product.img}
                                imgClass={product.imgClass}
                                desc={product.desc}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Universe;
