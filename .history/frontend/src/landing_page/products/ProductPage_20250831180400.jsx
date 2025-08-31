import React from 'react'
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import Navbar from '../Navbar';
import Footer from '../Footer';

function ProductPage() {
    return ( 
        <>  
            <Navbar/>
            <Hero/>
            
            <LeftSection
                imgSrc="https://zerodha.com/static/images/products-kite.png"
                imgAlt="Kite trading platform screenshots"
                heading="Kite"
                body="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                primaryText="Try demo"
                primaryHref="#demo"
                secondaryText="Learn more"
                secondaryHref="#learn-more"
            />
            <RightSection
                imgSrc="https://zerodha.com/static/images/products-console.png"
                imgAlt="Kite trading platform screenshots"
                heading="Console"
                body="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                primaryText="Try demo"
                primaryHref="#demo"
                secondaryText="Learn more"
            />
            <LeftSection
                imgSrc="https://zerodha.com/static/images/products-kite.png"
                imgAlt="Kite trading platform screenshots"
                heading="Kite"
                body="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                primaryText="Coin"
                primaryHref="#demo"
                secondaryText="Learn more"
                secondaryHref="#learn-more"
            />
            <RightSection
                imgSrc="https://zerodha.com/static/images/products-console.png"
                imgAlt="Kite trading platform screenshots"
                heading="Console"
                body="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                primaryText="Try demo"
                primaryHref="#demo"
                secondaryText="Learn more"
            />
            <Universe/>
            <Footer/>

        </>
     );
}

export default ProductPage;