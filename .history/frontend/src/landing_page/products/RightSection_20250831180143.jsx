import React from "react";

export default function RightSection({
  imgSrc,
  imgAlt = "",
  heading,
  body,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
  extra,
  children, // for custom nodes like store badges
}) {
  return (
    <section className="container py-5">
      <div className="row align-items-center gap-5">
        <div className="col-12 col-lg-6 text-center">
          <img src={imgSrc} alt={imgAlt} className="img-fluid" />
        </div>
        
      </div>
    </section>
  );
}
