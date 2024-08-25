import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ContactUs = () => {

  const navigate = useNavigate();
  const [footerAddress, setFooterAddress] = useState([]);
  const [footerSocial, setFooterSocial] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);





  const handleMessage = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const number = event.target.number.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;
    const messageStatus = event.target.messageStatus.value;


    const addItem = {
      name,
      email,
      number,
      subject,
      message,
      messageStatus,

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

        alert('Message is Send Thanks');
        navigate('/#')
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


      <section className="contact pt-120" id='contact-sec'>
        <div className="container">
          <div className="ad-contact pos-rel">
            <div className="sec-title sec-title--advisor mb-30">
            </div>
            <div className="row">
              <div className="col-lg-7">
                <form onSubmit={handleMessage} className="ins-contact-form" >
                  <div className="xb-item--field">
                    <span><img src="assets/img/icon/ins_user.svg" alt /></span>
                    <input type="text" name='name' placeholder="Jordan Eugenio" />
                  </div>
                  <div className="xb-item--field">
                    <span><img src="assets/img/icon/ins-sms-tracking.svg" alt /></span>
                    <input type="email" name='email' placeholder="info@email.com" />
                  </div>
                  <div className="xb-item--field">
                    <span><img src="assets/img/icon/call-calling.svg" alt /></span>
                    <input type="text" name='number' placeholder="+888 -8867 3333" />
                  </div>
                  <div className="xb-item--field">
                    <span></span>
                    <input type="text" name='subject' placeholder="Your Subject" />
                  </div>
                  <div className="xb-item--field">
                    <span></span>
                    <input name="messageStatus" value="UnRead" hidden placeholder="Message Status" />
                  </div>
                  <div className="xb-item--field">
                    <span><img src="assets/img/icon/messages-2.svg" alt /></span>
                    <textarea name="message" id="message" cols={30} rows={10} placeholder="What do you want to discuss?" defaultValue={""} />
                  </div>
                  <div className="xb-item--btn">
                    <button className="xb-btn xb-btn--advisor">send message</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="ad-contact__img">
              <img src="https://i.ibb.co/M7z5GGS/cnt-img2.png" alt />
            </div>
          </div>
        </div>
      </section>


    </>





  );
};

export default ContactUs;