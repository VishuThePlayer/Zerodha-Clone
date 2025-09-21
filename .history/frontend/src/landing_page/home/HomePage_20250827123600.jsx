import React from 'react'
import Hero from './hero';
import Award from './award';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';

function HomePage() {
    return ( 
        <>
            <Navba
            <Hero/>
            <Award/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
        </>
    );
}

export default HomePage;