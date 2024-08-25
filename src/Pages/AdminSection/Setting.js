import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banner from './Images/banner.png'
import logo from './Images/logo.png'
import about from './Images/about.png'
import service from './Images/service.png'
import counter from './Images/counter.png'
import team from './Images/teammembers.png'
import quality from './Images/price.png'
import features from './Images/calltoaction.png'
import pri from './Images/price.png'
import footerad from './Images/contact.png'
import footersocial from './Images/social-media.png'
import copyright from './Images/copyright.png'
import timeline from './Images/timeline.png'
import testimonial from './Images/testimonial.png'
import paypalss from './Images/paypal.png'
import mail from './Images/email.png'
import "./Setting.css";
import HeaderBottom from '../../components/HomePage/HeaderBottom';





const Setting = () => {


    const [paypal, setPaypal] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/paypal-email`)
            .then((res) => res.json())
            .then((info) => setPaypal(info));
    }, []);

    return (


        <>
            <HeaderBottom></HeaderBottom>
            <div className='setting-menu'>
                <section id="home" className="slider-area slider-four fix p-relative mb-5">
                    <div className="slider-active">
                        <div
                            className="single-slider slider-bg d-flex align-items-center"
                            style={{
                                background: "url(img/slider/slider_img_bg.png) no-repeat",
                                backgroundPosition: "center center",
                            }}
                        >
                            <div className='container align-items-center justify-content-center mt-5'>

                                <div class="container text-center">
                                    <div class="row">
                                        <div class="col-lg-3  col-md-6 col-12">
                                            <div className='single-card'>
                                                <Link to='/edit-banner'> <img src={banner} /> <h6>Banner Setting</h6></Link>
                                            </div>
                                        </div>
                                        <div class="col-lg-3  col-md-6 col-12">
                                            <div className='single-card'>
                                                <Link to='/add-logo'> <img src={logo} /><h6>Logo Setting</h6> </Link>
                                            </div>

                                        </div>

                                        <div class="col-lg-3  col-md-6 col-12">
                                            <div className='single-card'>
                                                <Link to='/edit-about'>  <img src={about} /><h6>About Setting</h6> </Link>
                                            </div>

                                        </div>

                                        <div class="col-lg-3  col-md-6 col-12">

                                            <div className='single-card'>
                                                <Link to='/edit-service'> <img src={service} /> <h6>Service Setting</h6></Link>
                                            </div>
                                        </div>


                                        <div class="col-lg-3  col-md-6 col-12">

                                            <div className='single-card'>
                                                <Link to='/add-pricing'>  <img src={quality} /><h6>Pricing Setting</h6></Link>
                                            </div>
                                        </div>
                                        <div class="col-lg-3  col-md-6 col-12">

                                            <div className='single-card'>
                                                <Link to='/edit-counter'>  <img src={counter} /><h6>Counter Setting</h6></Link>
                                            </div>
                                        </div>

                                        <div class="col-lg-3  col-md-6 col-12">

                                            <div className='single-card'>
                                                <Link to='/edit-testimonial'>  <img src={testimonial} /> <h6>Testimonials Setting</h6>  </Link>
                                            </div>
                                        </div>

                                        <div class="col-lg-3  col-md-6 col-12">
                                            <div className='single-card'>
                                                <Link to='/add-address-footer'> <img src={footerad} /> <h6>Footer Address</h6></Link>
                                            </div>

                                        </div>
                                        <div class="col-lg-3  col-md-6 col-12">

                                            <div className='single-card'>
                                                <Link to='/add-social-footer'> <img src={footersocial} /> <h6>Footer Setting</h6> </Link>
                                            </div>
                                        </div>

                                        <div class="col-lg-3  col-md-6 col-12">

                                            <div className='single-card'>
                                                <Link to='/add-copyright'> <img src={copyright} /> <h6>Footer CopyRight</h6></Link>
                                            </div>
                                        </div>
                                        <div class="col-lg-3  col-md-6 col-12">

                                            <div className='single-card'>
                                                <Link to='/add-user'> <img src={mail} /> <h6>Admin Setting</h6></Link>
                                            </div>
                                        </div>

                                        {paypal.map(e => (
                                            <div className='col-lg-3  col-md-6 col-12' key={e._id}>
                                                <div className='single-card '>
                                                    <Link to={`/paypal-email/${e._id}`}>
                                                        <div ><img src={paypalss} alt="Payment" /> <h6>Payment Setting</h6></div>
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}


                                    </div>
                                </div>

                                <div className='admin-cards mt-5 container '>






                                </div>
                            </div>
                        </div>
                    </div>
                </section>



            </div></>

    );
};

export default Setting;