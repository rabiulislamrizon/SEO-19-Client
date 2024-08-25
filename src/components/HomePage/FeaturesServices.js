import React, { useEffect, useState } from 'react';

const FeaturesServices = () => {

  const [featurestext, setFeaturesText] = useState([]);

  const [featureitems, setsetFeatures] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/featureitems`)
        .then((res) => res.json())
        .then((info) => setsetFeatures(info));
}, []);

  useEffect(() => {
    fetch(`http://localhost:5000/featurestext`)
        .then((res) => res.json())
        .then((info) => setFeaturesText(info));
}, []);
    return (
        <>
       <div className="feature-sec space">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 offset-lg-3">
        {
          featurestext.map(f=> <div className="title-area text-center">
          <span className="sub-title">{f.FeaturesText}</span>
          <h2 className="sec-title">{f.FeaturesHeading}</h2>
        </div> )
        }
       
      </div>
    </div>
    <div className="row gy-4 justify-content-center">
      {
        featureitems.map(s=> <div className="col-md-6 col-lg-4">
        <div className="feature-card wow fadeInUp">
          <div className="feature-card_img global-img">
            <img src={s.FeaturesImg} alt="feature" />
          </div>
          <div className="feature-card_content">
            <div className="feature-card_icon"><img src={s.FeaturesIcon} alt="feature" /> </div>
            <h3 className="box-title">{s.FeaturesText}</h3>
            <p className="feature-card_text">{s.FeaturesDesc}</p>
           
          </div>
        </div>
      </div> )
      }
      
      
      
    </div>
  </div>
</div>

            
        </>
    );
};

export default FeaturesServices;