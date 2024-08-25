import React, { useEffect, useState } from 'react';
import HeaderBottom from './HeaderBottom';
import { Link } from 'react-router-dom';

const PricingPage = () => {
    const [pricing, setPricing] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/pricings`)
            .then((res) => res.json())
            .then((info) => setPricing(info));
    }, []);
    return (
        <>

            {/* <section className="bredcumbs-area bg_cover" style={{ backgroundColor: '#000000', }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="page-title-inner">
                                <ul className="bredcumbs-link">
                                    <li><a href="/">Home</a></li>
                                    <li className="active">Pricing</li>
                                </ul>
                                <div className="title">
                                    <h1>Pricing</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="demo">
                <div class="container mt-5 mb-5 ">
                    <div class="row">
                        {
                            pricing.map(b => b.packageName === 'Basic' &&
                                <div class="col-md-4 col-sm-6">
                                    <div class="pricingTable">
                                        <div class="pricingTable-header">
                                            <div class="pricing-icon"><i class="fa fa-lightbulb"></i></div>
                                            <h3 class="title">{b.packageName}</h3>

                                        </div>
                                        <ul class="pricing-content">
                                            <li><i className="far fa-check" /> {b.packagePointOne}</li>
                                            <li><i className="far fa-check" /> {b.packagePointTwo}</li>
                                            <li><i className="far fa-check" /> {b.packagePointThree}</li>
                                            <li><i className="far fa-check" /> {b.packagePointFour}</li>
                                            <li><i className="far fa-check" /> {b.packagePointFive}</li>
                                            <li><i className="far fa-check" /> {b.packagePointSix}</li>
                                            <li><i className="far fa-check" /> {b.packagePointSeven}</li>
                                            <li><i className="far fa-check" /> {b.packagePointEight}</li>
                                        </ul>
                                        <div class="price-value">
                                            ${b.packagePrice}
                                        </div>
                                        <div class="pricingTable-signup">
                                            <Link to={`/order-now/${b._id}`} >{b.packageButtonText}</Link>
                                        </div>
                                    </div>
                                </div>
                            )}

                        {
                            pricing.map(s => s.packageName === 'Standard' &&
                                <div class="col-md-4 col-sm-6">
                                    <div class="pricingTable orange">
                                        <div class="pricingTable-header">
                                            <div class="pricing-icon"><i class="fa fa-crown"></i></div>
                                            <h3 class="title">{s.packageName}</h3>
                                        </div>
                                        <ul class="pricing-content">
                                            <li><i className="far fa-check" /> {s.packagePointOne}</li>
                                            <li><i className="far fa-check" /> {s.packagePointTwo}</li>
                                            <li><i className="far fa-check" /> {s.packagePointThree}</li>
                                            <li><i className="far fa-check" /> {s.packagePointFour}</li>
                                            <li><i className="far fa-check" /> {s.packagePointFive}</li>
                                            <li><i className="far fa-check" /> {s.packagePointSix}</li>
                                            <li><i className="far fa-check" /> {s.packagePointSeven}</li>
                                            <li><i className="far fa-check" /> {s.packagePointEight}</li>

                                        </ul>
                                        <div class="price-value">
                                            ${s.packagePrice}
                                        </div>
                                        <div class="pricingTable-signup">
                                            <Link to={`/order-now/${s._id}`}>{s.packageButtonText}</Link>
                                        </div>
                                    </div>
                                </div>
                            )}

                        {
                            pricing.map(p => p.packageName === 'Premium' &&
                                <div class="col-md-4 col-sm-6">
                                    <div class="pricingTable">
                                        <div class="pricingTable-header">
                                            <div class="pricing-icon"><i class="fa fa-rocket"></i></div>
                                            <h3 class="title">{p.packageName}</h3>
                                        </div>
                                        <ul class="pricing-content">
                                            <li><i className="far fa-check" /> {p.packagePointOne}</li>
                                            <li><i className="far fa-check" /> {p.packagePointTwo}</li>
                                            <li><i className="far fa-check" /> {p.packagePointThree}</li>
                                            <li><i className="far fa-check" /> {p.packagePointFour}</li>
                                            <li><i className="far fa-check" /> {p.packagePointFive}</li>
                                            <li><i className="far fa-check" /> {p.packagePointSix}</li>
                                            <li><i className="far fa-check" /> {p.packagePointSeven}</li>
                                            <li><i className="far fa-check" /> {p.packagePointEight}</li>
                                        </ul>
                                        <div class="price-value">
                                            ${p.packagePrice}
                                        </div>
                                        <div class="pricingTable-signup">
                                            <Link to={`/order-now/${p._id}`}>{p.packageButtonText}</Link>
                                        </div>
                                    </div>
                                </div>

                            )}




                    </div>
                </div>
            </div> */}

            <div>
                {/* start page title area*/}
                <div className="page-title-area bg-thin">
                    <div className="container">
                        <div className="page-title-content">
                            <h1>pricing</h1>
                            <ul>
                                <li className="item"><a href="index.html">Home</a></li>
                                <li className="item"><a href="pricing.html">pricing</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="shape">
                        <span className="shape1" />
                        <span className="shape2" />
                        <span className="shape3" />
                        <span className="shape4" />
                    </div>
                </div>
                {/* end page title area */}
                {/* pricing plan start */}
                <section className="pricing-section pricing-single pt-100 pb-70 bg-thin">
                    <div className="container">
                        <div className="section-title pb-100">
                            <span className="subtitle">pricing packages</span>
                            <h2>Choose Your Best Packages</h2>
                            
                        </div>
                        <div className="row justify-content-center">
                            {
                                pricing.map(b => b.packageName === 'Basic' && <div className="col-lg-4 pb-70">
                                    <div className="pricing-item-single">
                                        <div className="pricing-item-content">
                                            <div className="content-text">
                                                <span className="label">{b.packageName}</span>
                                                <h2 className="price"><span>$</span>{b.packagePrice}</h2>
                                                <p hidden >monthly</p>
                                            </div>
                                            <div className="content-bg">
                                                <img src="assets/img/resource/icon_shape_7.png" alt />
                                            </div>
                                        </div>
                                        <div className="pricing-item-list ">
                                            <ul className="mb-3">
                                                <li><i className="envy envy-paper-plane" />{b.packagePointOne}</li>
                                                <li><i className="envy envy-paper-plane" />{b.packagePointTwo}</li>
                                                <li><i className="envy envy-paper-plane" />{b.packagePointThree}</li>
                                                <li><i className="envy envy-paper-plane" />{b.packagePointFour}</li>
                                                <li><i className="envy envy-paper-plane" />{b.packagePointFive}</li>
                                                <li><i className="envy envy-paper-plane" />{b.packagePointSix}</li>
                                                <li><i className="envy envy-paper-plane" />{b.packagePointSeven}</li>

                                            </ul>
                                            <Link to={`/order-now/${b._id}`} className="xb-btn xb-btn--advisor">{b.packageButtonText} <i className="envy envy-right-arrow" /></Link>
                                          
                                        </div>
                                    </div>
                                    {/* pricing-item-single */}
                                </div>)
                            }

                            {
                                pricing.map(s => s.packageName === 'Premium' &&
                                    <div className="col-lg-4 pb-70">
                                        <div className="pricing-item-single">
                                            <div className="pricing-item-content">
                                                <div className="content-text">
                                                    <span className="label">{s.packageName}</span>
                                                    <h2 className="price"><span>$</span>{s.packagePrice}</h2>
                                                    <p hidden >monthly</p>
                                                </div>
                                                <div className="content-bg">
                                                    <img src="assets/img/resource/icon_shape_8.png" alt />
                                                </div>
                                            </div>
                                            <div className="pricing-item-list">
                                                <ul className="mb-3">
                                                    <li><i className="envy envy-paper-plane" />{s.packagePointOne}</li>
                                                    <li><i className="envy envy-paper-plane" />{s.packagePointTwo}</li>
                                                    <li><i className="envy envy-paper-plane" />{s.packagePointThree}</li>
                                                    <li><i className="envy envy-paper-plane" />{s.packagePointFour}</li>
                                                    <li><i className="envy envy-paper-plane" />{s.packagePointFive}</li>
                                                    <li><i className="envy envy-paper-plane" />{s.packagePointSix}</li>
                                                    <li><i className="envy envy-paper-plane" />{s.packagePointSeven}</li>
                                                    <li><i className="envy envy-paper-plane" />{s.packagePointEight}</li>

                                                </ul>
                                                <Link to={`/order-now/${s._id}`} className="xb-btn xb-btn--advisor">{s.packageButtonText} <i className="envy envy-right-arrow" /></Link>
                                                
                                            </div>
                                        </div>
                                        {/* pricing-item-single */}
                                    </div>)
                            }

                            {
                                pricing.map(p => p.packageName === 'Standard' && <div className="col-lg-4 pb-70">
                                    <div className="pricing-item-single">
                                        <div className="pricing-item-content">
                                            <div className="content-text">
                                                <span className="label">{p.packageName}</span>
                                                <h2 className="price"><span>$</span>{p.packagePrice}</h2>
                                                <p hidden >monthly</p>
                                            </div>
                                            <div className="content-bg">
                                                <img src="assets/img/resource/icon_shape_7.png" alt />
                                            </div>
                                        </div>
                                        <div className="pricing-item-list">
                                            <ul className="mb-3">
                                            <li><i className="envy envy-paper-plane" />{p.packagePointOne}</li>
                                                    <li><i className="envy envy-paper-plane" />{p.packagePointTwo}</li>
                                                    <li><i className="envy envy-paper-plane" />{p.packagePointThree}</li>
                                                    <li><i className="envy envy-paper-plane" />{p.packagePointFour}</li>
                                                    <li><i className="envy envy-paper-plane" />{p.packagePointFive}</li>
                                                    <li><i className="envy envy-paper-plane" />{p.packagePointSix}</li>
                                                    <li><i className="envy envy-paper-plane" />{p.packagePointSeven}</li>
                                                    
                                            </ul>
                                            <Link to={`/order-now/${p._id}`} className="xb-btn xb-btn--advisor">{p.packageButtonText} <i className="envy envy-right-arrow" /></Link>
                                           
                                        </div>
                                    </div>
                                    {/* pricing-item-single */}
                                </div>)
                            }


                        </div>
                    </div>
                </section>
                {/* pricing plan end */}
            </div>


        </>
    );
};

export default PricingPage;