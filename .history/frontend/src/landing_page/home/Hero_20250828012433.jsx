import React from 'react';

function Hero() {
  return (
    <div className="container">
      {/* tiny, component-scoped CSS just for responsiveness */}
      <style>{`
        @media (max-width: 576px) {
          .hero-img { max-width: 100% !important; }
          .hero-btn { width: 100% !important; }
        }
        @media (min-width: 577px) {
          .hero-btn { width: 15% !important; } /* keep your original width on larger screens */
          .hero-img { max-width: 88% !important; } /* keep your original image width */
        }
      `}</style>

      <div className="mt-5 mb-5 row justify-content-center text-center">
        <div className="col-12 col-md-10 col-lg-8">
          <img
            src="https://zerodha.com/static/images/landing.png"
            alt="Hero_Img"
            className="img-fluid mx-auto d-block mb-4 hero-img"
          />

          <h2>Invest in everything</h2>

          <p className="fs-4">
            Online platform to invest in stocks, derivatives, mutual funds, ETFs,
            bonds, and more.
          </p>

          <button
            className="btn btn-primary py-2 mt-4 fs-4 mb-5 hero-btn"
            style={{ margin: '0 auto' }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
