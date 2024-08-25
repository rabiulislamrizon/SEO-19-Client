import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";



const NavBar = () => {

  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  const [users, setUser] = useState([]);
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);


  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((info) => setUser(info));
  }, []);


  const [footerSocial, setFooterSocial] = useState([]);

  const [footerAddress, setFooterAddress] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);




  return (

    <>
    

      <div class="xb-backtotop style-advisor">
        <a href="#" class="scroll">
          <i class="far fa-arrow-up"></i>
        </a>
      </div>

      <header id="xb-header-area" className="site-header header-advisor is-sticky">
        <div className="container">
          <div className="ad-header-top ul_li_between">
            {
              footerAddress.map(e=>  <span className="number mt-10">Help Desk : <span>{e.phoneNumber}</span></span>)
            }
           
            {
              footerSocial.map(d=> <div className="xb-social ul_li mt-10">
                <span>Follow us :</span>
                <ul className="ul_li">
                  <li><a href={d.fblink}><i className="fab fa-facebook-f" /></a></li>
                  <li><a href={d.inslink}><i className="fab fa-instagram" /></a></li>
                  <li><a href={d.youlink}><i className="fab fa-youtube" /></a></li>
                </ul>
              </div>)
            }
            
          </div>
        </div>
        <div className="xb-header__wrap xb-header-has-arrow xb-header">
          <div className="container">
            <div className="ul_li_between">
              {
                logo.map(l => <div className="xb-header__logo">
                  <a href="/"><img src={l.logo} alt /></a>
                </div>)
              }

              <div className="main-menu__wrap ul_li navbar navbar-expand-lg">
                <nav className="main-menu collapse navbar-collapse">
                  <ul>

                    <li><a href="/"><span>Home</span></a></li>
                    <li><a href="#about-sec"><span>About Us</span></a></li>
                    <li><a href="#services-sec"><span>Services</span></a></li>
                    <li><a href="#pricing-sec"><span>Pricing</span></a></li>
                    <li><a href="#contact-sec"><span>Contact</span></a></li>

                  </ul>
                </nav>
                <div className="xb-header-wrap">
                  <div className="xb-header-menu">
                    <div className="xb-header-menu-scroll">
                      <div className="xb-menu-close xb-hide-xl xb-close" />
                      <div className="xb-logo-mobile xb-hide-xl">
                        <a href="index.html" rel="home"><img src="assets/img/logo/logo2.svg" alt /></a></div>
                      <div className="xb-header-mobile-search xb-hide-xl">
                        <form role="search" action="#">
                          <input type="text" placeholder="Search..." name="s" className="search-field" />
                        </form>
                      </div>
                      <nav className="xb-header-nav">
                        <ul className="xb-menu-primary clearfix">
                          <li className="menu-item menu-item-has-children">
                            <a href="#"><span>Home</span></a>
                            <ul className="sub-menu">
                              <li className="menu-item active"><a className="active" href="index.html"><span>Financial Consultant</span></a></li>
                              <li className="menu-item"><a href="home-business.html"><span>Business Consultant</span></a></li>
                              <li className="menu-item"><a href="home-digital-marketing.html"><span>Digital Marketing</span></a></li>
                              <li className="menu-item"><a href="home-law.html"><span>Lawyer Firms</span></a></li>
                              <li className="menu-item"><a href="home-insurance.html"><span>Insurance Business</span></a></li>
                              <li className="menu-item"><a href="home-advisor.html"><span>Personal Advisor</span></a></li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-has-children">
                            <a href="#"><span>Pages</span></a>
                            <ul className="sub-menu">
                              <li className="menu-item"><a href="about.html"><span>About</span></a></li>
                              <li className="menu-item"><a href="services.html"><span>Services</span></a></li>
                              <li className="menu-item"><a href="service-single.html"><span>Service Details</span></a></li>
                              <li className="menu-item"><a href="career.html"><span>Career</span></a></li>
                              <li className="menu-item"><a href="career-single.html"><span>Career Details</span></a></li>
                              <li className="menu-item"><a href="team.html"><span>Team</span></a></li>
                              <li className="menu-item"><a href="team-single.html"><span>Team Details</span></a></li>
                              <li className="menu-item"><a href="pricing.html"><span>Pricing</span></a></li>
                              <li className="menu-item"><a href="faq.html"><span>FAQ</span></a></li>
                              <li className="menu-item"><a href="404.html"><span>404</span></a></li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-has-children">
                            <a href="portfolio.html"><span>Portfolio</span></a>
                            <ul className="sub-menu">
                              <li className="menu-item"><a href="portfolio.html"><span>Portfolio</span></a></li>
                              <li className="menu-item"><a href="portfolio-single.html"><span>Portfolio Details</span></a></li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-has-children">
                            <a href="shop.html"><span>Shop</span></a>
                            <ul className="sub-menu">
                              <li className="menu-item"><a href="shop.html"><span>Shop</span></a></li>
                              <li className="menu-item"><a href="shop-single.html"><span>Shop Details</span></a></li>
                              <li className="menu-item"><a href="cart.html"><span>Shop Cart</span></a></li>
                              <li className="menu-item"><a href="checkout.html"><span>Checkout</span></a></li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-has-children">
                            <a href="blog.html"><span>Blog</span></a>
                            <ul className="sub-menu">
                              <li className="menu-item"><a href="blog.html"><span>Blog</span></a></li>
                              <li className="menu-item"><a href="blog-single.html"><span>Blog Details</span></a></li>
                            </ul>
                          </li>
                          <li className="menu-item"><a href="contact.html"><span>Contact</span></a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="xb-header-menu-backdrop" />
                </div>
              </div>
              {
                user?.email ?
                  <li>
                    <Link to="/dashboard" className=" xb-btn xb-btn--advisor text-decoration-none ">Dashboard</Link>
                  </li>
                  :
                  <li>
                    <Link to="/login" className="xb-btn xb-btn--advisor text-decoration-none ">Log in</Link>
                  </li>
              }

              {
                users.map(u => u.userEmail === user?.email && u.userRole === 'Admin' &&
                  <li>
                    <Link to="/admin" className="xb-btn xb-btn--advisor text-decoration-none ">Admin</Link>
                  </li>
                )
              }
              <div className="xb-hamburger-menu">
                <div className="xb-nav-mobile">
                  <div className="xb-nav-mobile-button"><i className="fal fa-bars" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

    </>



  );
};

export default NavBar;
