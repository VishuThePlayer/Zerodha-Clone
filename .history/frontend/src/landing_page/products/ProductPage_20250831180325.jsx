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
            
            https://zerodha.com/static/images/products-console.png
            <RightSection
                imgSrc="https://zerodha.com/static/images/products-console.png"
                imgAlt="Kite trading platform screenshots"
                heading="Console"
                body="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                primaryText="Try demo"
                primaryHref="#demo"
                secondaryText="Learn more"
            <Universe/>
            <Footer/>

        </>
     );
}

export default ProductPage;