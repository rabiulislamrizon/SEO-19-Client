import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AboutSection = () => {

  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);





  return (



    <>

    {
      about.map(a=><section className="cta pt-140 pb-100" id="about-sec">
        <div className="container">
          <div className="row align-items-center mt-none-30">
            <div className="col-lg-6 mt-30">
              <div className="service-cta-content" >
                <div className="sec-title about-sec-title mb-50">
                  <span className="subtitle ul_li">
                  {a.aboutText}</span>
                  <h2 className="title mb-35">{a.aboutHeading}</h2>
                  <p>{a.aboutDetails}</p>
                  
                </div>
                <a className="xb-btn" href="#contact-sec">Talk to an Expert</a>
              </div>
            </div>
            <div className="col-lg-6 mt-30">
              <div className="service-cta-img text-lg-end"  >
                <img src={a.aboutImgOne} alt />
              </div>
            </div>
          </div>
        </div>
      </section> )
    }

      





    </>
  );
};

export default AboutSection;
