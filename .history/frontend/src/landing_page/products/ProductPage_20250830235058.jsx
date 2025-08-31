import React from 'react'
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import Navbar from '../Navbar';
import Footer from '../Footer';

function ProductPage() {
    eturn (
    <>
      <Hero
        title="Zerodha Products"
        subtitle="Sleek, modern, and intuitive trading platforms"
        note="Check out our investment offerings"
        noteHref="#investments"
      />

      <LeftSection
        imgSrc="/images/kite-hero.png"
        imgAlt="Kite trading platform screenshots"
        heading="Kite"
        body="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        primaryText="Try demo"
        primaryHref="#demo"
        secondaryText="Learn more"
        secondaryHref="#learn-more"
      >
        <div className="d-flex gap-3 mt-2">
          <img src="/badges/google-play.svg" alt="Get it on Google Play" height="40" />
          <img src="/badges/app-store.svg" alt="Download on the App Store" height="40" />
        </div>
      </LeftSection>
    </>
  );


export default ProductPage;