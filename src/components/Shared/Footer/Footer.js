import React, { useEffect, useState } from "react";
import { Link, } from "react-router-dom";

const Footer = () => {



  const [footerSocial, setFooterSocial] = useState([]);
  const [footerCopyright, setFooterCopyright] = useState([]);

  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);




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

  useEffect(() => {
    fetch(`http://localhost:5000/copyrights`)
      .then((res) => res.json())
      .then((info) => setFooterCopyright(info));
  }, [footerCopyright]);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subemail = event.target.subemail.value;




    const addItem = {
      subemail,



    };

    const url = `http://localhost:5000/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Subscribers Request is Sent');
      });


  }




  return (


    <>
    {
      footerAddress.map(a=> <footer className="xb-footer z-1 pos-rel footer-advisor pt-100 pb-25">
        <div className="container">
          <div className="row mt-none-30">
            <div className="col-lg-3 col-md-6 footer__custom-col mt-30">
              <div className="footer__widget">
                <h4>our address</h4>
                <p>{a.location}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer__custom-col mt-30">
              <div className="footer__widget">
                <h4>Phone</h4>
                <p>{a.phoneNumber}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer__custom-col mt-30">
              <div className="footer__widget">
                <h4>Email </h4>
                <p>{a.emailAddress}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer__custom-col mt-30">
              {
                footerSocial.map(s=> <div className="footer__widget text-lg-end">
                  <h4>follow us</h4>
                  <ul className="ad-footer-social ul_li_right">
                    <li><a href={s.fblink}><i className="fab fa-facebook-f" /></a></li>
                    <li><a href={s.inslink}><i className="fab fa-instagram" /></a></li>
                    <li><a href={s.youlink}><i className="fab fa-youtube" /></a></li>
                  </ul>
                </div> )
              }

             
            </div>
          </div>
          <div className="ad-footer-nav__inner mt-50 ul_li_between">

            <ul className="ad-footer-nav ul_li">
            </ul>
          </div>
          <div className="ad-copyright-area mb-30 text-center  ">
            {
              footerCopyright.map(c => <div className="copyright-text">
                {c.copyrightText}
              </div>)
            }


          </div>
        </div>
      </footer>)
    }
      










    </>
  );
};

export default Footer;
