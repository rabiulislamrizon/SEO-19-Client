import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const CallToAction = () => {

  const [action, setAction] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/actions`)
      .then((res) => res.json())
      .then((info) => setAction(info));


  }, []);


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
        Navigate('/all-subscriber');
        alert('Subscribers is Updated');
      });


  }





  

  return (
    
    <>

    {
      action.map(a=><section className="newslatter_section">
      <div className="container">
        <div className="newslatter_box" style={{backgroundImage: 'url("assets/images/shape/shape_img_6.svg")'}}>
          <div className="row justify-content-center">
            <div className="col col-lg-6">
              <div className="section_heading text-center">
                <h2 className="heading_text">
                 {a.heading}
                </h2>
                <p className="heading_description mb-0">
                {a.subHeading}
                </p>
              </div>
              <form action="#" onSubmit={handleSubscriber}>
                <div className="form_item m-0">
                  <input type="email" name="subemail" placeholder="Your Email" />
                  <button type="submit" className="btn btn_dark">
                    <span>
                      <small>Subsctibe</small>
                      <small>Subsctibe</small>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>)
    }
   



    </>
  );
};

export default CallToAction;