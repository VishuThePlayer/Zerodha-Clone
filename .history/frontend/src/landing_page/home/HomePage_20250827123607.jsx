import React from 'react'
import Hero from './hero';
import Award from './award';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';

function HomePage() {
    return ( 
        <>
            <Navbar
            <Hero/>
            <Award/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
        </>
    );
}

export default HomePage;