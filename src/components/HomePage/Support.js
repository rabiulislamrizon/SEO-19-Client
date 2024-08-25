import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Support = () => {
  const [contact, setContact] = useState([]);
  const navigate = useNavigate();
  const [footerAddress, setFooterAddress] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);

  useEffect(() => {
    fetch(`http://localhost:5000/contacts`)
      .then((res) => res.json())
      .then((info) => setContact(info));
  }, []);



  const handleMessage = (event) => {
    event.preventDefault();
    const fullName = event.target.fullName.value;
    const phoneNumber = event.target.phoneNumber.value;
    const emailAddress = event.target.emailAddress.value;
    const website = event.target.website.value;
    const messageStatus = event.target.messageStatus.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;


    const addItem = {
      fullName,
      phoneNumber,
      emailAddress,
      website,
      messageStatus,
      subject,
      message,

    };

    const url = `http://localhost:5000/add-message`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate('/all-messages');
        alert('Message is Updated');
      });
  };

  const [action, setAction] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/actions`)
      .then((res) => res.json())
      .then((info) => setAction(info));
  }, []);



  return (


    
    <>
      <div>
     
        <section className="page-title-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="page-title">Support Now</h2>
              </div>
              <div className="col-md-6">
                <ul className="breadcrumb-nav">
                  <li><a href="/">Home</a></li>
                  <li>Support Us</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      
        
        {/*====== Contact Form Start ======*/}
        <section className="contact-from-area section-gap">
          <div className="container">
            <div className="contact-from">
              <div className="section-heading text-center mb-60">
                <h2 className="title">Send Us Message For Support</h2>
                <span className="tagline">Get Instant Solutions</span>
              </div>
              <form action="#" onSubmit={handleMessage}>
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="input-field">
                      <input type="text" name='fullName' placeholder="Your Full Name" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="input-field">
                      <input type="text" name='phoneNumber' placeholder="Phone Number" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input-field">
                      <input type="email" name='emailAddress' placeholder="Email Address" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-field">
                      <input type="text" name='website' placeholder="Website" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-field">
                      <input type="text" name='subject' placeholder="Subject" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-field">
                      <input type="text" name='messageStatus' hidden value='UnRead' required />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-field">
                      <textarea placeholder="Message" name='message' defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="xb-btn xb-btn--advisor w-100">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/*====== Contact Form End ======*/}
        {/*====== Call To Action Start ======*/}
        <section className="call-to-action bg-color-secondary section-animate-icons">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-5 order-lg-last">
                <div className="cta-illustrations text-center text-lg-right content-mb-md-50">
                  <img src="assets/img/cta-illustrations.png" alt="Image" className="animate-float-bob-y" />
                </div>


              </div>

              {
                action.map(a => <div className="col-lg-7 col-md-10">
                  <div className="cta-content">
                    <h2 className="title">{a.heading}</h2>
                    <p className="subtitle">{a.subHeading}</p>
                    <p className="cta-note">Get Every Single Updates</p>
                    <a href={a.buttonLink} className="xb-btn xb-btn--advisor">{a.buttonText}<i className="far fa-long-arrow-right" /></a>
                  </div>
                </div>)
              }

            </div>
          </div>
          {/* Animate Icons */}
          <div className="animate-icons">
            <img src="assets/img/shape/dots-circle.png" alt="Icon" className="dots-circle" />
          </div>
          <div className="cta-shape">
            <img src="assets/img/shape/cta-shape.png" alt="Shape" />
          </div>
        </section>
        {/*====== Call To Action End ======*/}
      </div>

    </>
  );
};

export default Support;