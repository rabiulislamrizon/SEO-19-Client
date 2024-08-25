import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PricingSection.css';


const PricingSection = () => {

  const [pricing, setPricing] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/pricings`)
      .then((res) => res.json())
      .then((info) => setPricing(info));
  }, []);

  return (




    <>
      <section className="pricing pos-rel z-1 pt-140 pb-150" data-bg-color="#E7E9EE" id='pricing-sec'>
        <div className="container">
          <div className="sec-title text-center mb-60">
            <span className="subtitle ul_li">
              Pricing Plan</span>
            <h2 className="title">Flexible pricing</h2>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
              <div className="row justify-content-md-center mt-none-30">
                {
                  pricing.map(b => b.packageName === 'Basic' && <div className="col-lg-4 col-md-6 mt-30">
                    <div className="xb-pricing">
                      <span className="xb-item--title">{b.packageName}</span>
                      <p className="xb-item--subtitle">Most Popular</p>
                      <h2 className="xb-item--price">${b.packagePrice} <span>Usd</span></h2>
                      <ul className="xb-item--list list-unstyled mb-35">
                        <li><span><img src="assets/img/icon/check.svg" alt /></span>{b.packagePointOne}</li>
                        <li><span><img src="assets/img/icon/check.svg" alt /></span>{b.packagePointTwo}</li>
                        <li><span><img src="assets/img/icon/check.svg" alt /></span>{b.packagePointThree}</li>
                        <li><span><img src="assets/img/icon/check.svg" alt /></span>{b.packagePointFour}</li>
                        <li><span><img src="assets/img/icon/check.svg" alt /></span>{b.packagePointFive}</li>

                      </ul>
                      <Link to={`/order-now/${b._id}`} className="xb-item--btn xb-btn">{b.packageButtonText}</Link>
                      <div className="xb-item--icon">
                        <img src="assets/img/icon/price_icon.png" alt />
                      </div>
                    </div>
                  </div>)}
                {
                  pricing.map(p => p.packageName === 'Premium' && <div className="col-lg-4 col-md-6 mt-30">
                    <div className="xb-pricing primary">
                      <span className="xb-item--title">{p.packageName}</span>
                      <p className="xb-item--subtitle">Recommended</p>
                      <h2 className="xb-item--price">${p.packagePrice}<span>usd</span></h2>
                      <ul className="xb-item--list list-unstyled mb-35">
                        <li><span><img src="assets/img/icon/check.svg" alt /></span>{p.packagePointOne}</li>
                        <li><span><img src="assets/img/icon/check.svg" alt /></span>{p.packagePointTwo}</li>
                        <li><span><img src="assets/img/icon/check.svg" alt /></span>{p.packagePointThree}</li>
                        <li><span><img src="assets/img/icon/check.svg" alt /></span>{p.packagePointFour}</li>
                        <li><span><img src="assets/img/icon/check.svg" alt /></span>{p.packagePointFive}</li>
                        <li><span><img src="assets/img/icon/check.svg" alt /></span>{p.packagePointSix}</li>

                      </ul>
                      <Link to={`/order-now/${p._id}`} className="xb-item--btn xb-btn">{p.packageButtonText}</Link>
                      <div className="xb-item--icon">
                        <img src="assets/img/icon/price_icon.png" alt />
                      </div>
                    </div>
                  </div>)}
                {
                  pricing.map(s => s.packageName === 'Standard' && <div className="col-lg-4 col-md-6 mt-30">
                    <div className="xb-pricing">
                      <span className="xb-item--title">{s.packageName}</span>
                      <p className="xb-item--subtitle">Best value</p>
                      <h2 className="xb-item--price">${s.packagePrice} <span>usd</span></h2>
                      <ul className="xb-item--list list-unstyled mb-35">
                        <li><span><img src="assets/img/icon/check.svg" alt /></span>{s.packagePointOne}</li>
                        <li><span><img src="assets/img/icon/check.svg" alt /></span>{s.packagePointTwo}</li>
                        <li><span><img src="assets/img/icon/check.svg" alt /></span>{s.packagePointThree}</li>
                        <li><span><img src="assets/img/icon/check.svg" alt /></span>{s.packagePointFour}</li>
                        <li><span><img src="assets/img/icon/check.svg" alt /></span>{s.packagePointFive}</li>
                      </ul>

                      <Link to={`/order-now/${s._id}`} className="xb-item--btn xb-btn">{s.packageButtonText}</Link>
                      <div className="xb-item--icon">
                        <img src="assets/img/icon/price_icon.png" alt />
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
        <div className="xb-service__shape">
          <div className="shape shape--1">
            <img data-parallax="{&quot;y&quot;: &quot;-90&quot;}" src="assets/img/shape/srv_shape1.png" alt />
          </div>
          <div className="shape shape--2">
            <img data-parallax="{&quot;y&quot;: &quot;90&quot;}" src="assets/img/shape/srv_shape2.png" alt />
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;