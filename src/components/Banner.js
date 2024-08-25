import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Banner.css';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/banner`)
      .then((res) => res.json())
      .then((info) => setBanners(info));
  }, []);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subscriberEmail = event.target.subscriberEmail.value;

    const sunscribe = {
      subscriberEmail

    };

    const url = `http://localhost:5000/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sunscribe),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Thanks For Subscribe..');
      });
  };



  return (




    <>
      {
        banners.map(b => <section className="hero hero-advisor pos-rel">
          <div className="container">
            <div className="row align-items-center">
              <div className="hero-content col-8">
                <div className="sec-title sec-title--advisor">
                  <span className="subtitle ul_li" > {b.bannerText}</span>
                  <h2 className="title title-big mb-30" >{b.bannerHeading}</h2>
                  <p className="text-20 mb-50">{b.bannerDetails} </p>
                </div>
              </div>
              <div className="ad-hero-img pos-rel mt-120 " >
                <img src={b.imageOne} alt />
                <a href={b.buttonURL} className="xb-btn xb-btn--advisor ad-hero-img-btn">{b.buttonText}</a>
              </div>
            </div>
          </div>
          <div className="ad-hero-shape">
            <img src="assets/img/shape/hero_shape.png" alt />
          </div>
        </section>)

      }










    </>
  );
};

export default Banner;
