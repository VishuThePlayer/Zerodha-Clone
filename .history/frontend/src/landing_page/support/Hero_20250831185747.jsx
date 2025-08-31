import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg-light border-bottom">
      <div className="container py-4">
        {/* Header row */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="m-0">Support Portal</h2>

          {/* If you have a tickets route, use Link. Otherwise use <a>. */}
          <Link to="/tickets" className="btn btn-primary">
            My tickets
          </Link>
        </div>

        {/* Search */}
        <div className="row">
          <div className="col-12">
            <input
              type="search"
              className="form-control form-control-lg"
              placeholder="Eg: How do I open my account, How do I activate F&O..."
              aria-label="Search support"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
