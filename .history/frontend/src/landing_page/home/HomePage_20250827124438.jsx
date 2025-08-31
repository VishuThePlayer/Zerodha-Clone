import React from 'react'
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Stats from './Stats';

function HomePage() {
    return ( 
        <>
            <Navbar/>
            <Hero
            <Award/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
            <Footer/>
        </>
    );
}

export default HomePage;