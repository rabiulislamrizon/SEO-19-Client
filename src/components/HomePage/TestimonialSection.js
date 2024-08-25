import React, { useEffect, useState } from "react";
import Swiper from "swiper"; // Import Swiper

const TestimonialSection = () => {

  const [testimonialtext, setTestimonialText] = useState([]);

  const [testimonials, settestimonials] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/testimonialtext`)
      .then((res) => res.json())
      .then((info) => setTestimonialText(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonials`)
      .then((res) => res.json())
      .then((info) => settestimonials(info));
  }, []);
  // Initialize Swiper
  React.useEffect(() => {
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
    });
  }, []);



  return (
    <section className="testimonial pt-120 pb-120" data-bg-color="#fff">
      <div className="container">

        {
          testimonialtext.map(s=> <div className="sec-title sec-title--advisor text-center mb-105">
            <span className="subtitle ul_li">
              {s.testimonialText}
            </span>
            <h2 className="title">{s.testimonialHeading}</h2>
          </div>)
        }

        

        <div className="ad-testimonial__inner">
          <div className="ad-testimonial-slider swiper-container">
            <div className="swiper-wrapper">

              {
                testimonials.map(t => <div className="swiper-slide">
                  <div className="ad-testimonial ul_li">
                    <div className="xb-item--avatar">
                      <img src={t.image} alt="avatar" />
                    </div>
                    <div className="xb-item--holder">
                      <div className="xb-item--content">
                        {t.desc}
                      </div>
                      <div className="xb-item--author">
                        <h3 className="xb-item--name">{t.personName}</h3>
                        <span className="xb-item--desig">{t.personTitle}</span>
                      </div>
                    </div>
                  </div>
                </div>)
              }
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
