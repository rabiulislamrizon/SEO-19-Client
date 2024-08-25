import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExperienceSection = () => {
  const Navigate = useNavigate();
  const [experience, setExperience] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/experiences`)
      .then((res) => res.json())
      .then((info) => setExperience(info));
  }, []);

  const handleMessage = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const date = selectedDate; // Use the selected date from state
    const time = selectedTime; // Use the selected time from state
    const message = event.target.message.value;
    const messageStatus = event.target.messageStatus.value;

    const addItem = {
      name,
      email,
      date,
      time,
      message,
      messageStatus,
    };

    const url = `http://localhost:5000/add-message`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {
        Navigate('/thanks');
        alert('Your Appointment is Updated');
      });
  };

  const currentDate = new Date().toISOString().split('T')[0]; // Get current date in 'YYYY-MM-DD' format
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }); // Get current time in 'hh:mm AM/PM' format

  return (
    <>
      <div className=" space-top why-area2 bg-top-center" id="appointment-sec" style={{
        backgroundImage: "url(https://i.postimg.cc/GthmnRRC/why-bg-2.jpg)",
        backgroundSize: "cover",
      }}>
        <div className="container">
          <div className="row justify-content-end">
            {
              experience.map(e => (
                <div className="col-xl-7 wow fadeInLeft" key={e.id}>
                  <div className="pe-xl-5">
                    <div className="title-area text-center text-xl-start mb-25">
                      <span className="sub-title style1">{e.experienceText}</span>
                      <h2 className="sec-title text-white">{e.experienceHeading}</h2>
                      <p>{e.experienceDetails}</p>
                    </div>
                    <div className="skill-card style2"></div>
                  </div>
                  <div className="info-card-wrap style2"></div>
                </div>
              ))
            }

            <div className="col-xl-5 wow fadeInRight">
              <div className="appointment-form style2">
                <h3 className="form-title text-center">Booking Appointment</h3>
                <form onSubmit={handleMessage}>
                  <div className="row">
                    <div className="form-group col-12">
                      <i className="fa-light fa-user" />
                      <input type="text" placeholder="Your Name" name="name" className="form-control" />
                    </div>
                    <div className="form-group col-12">
                      <i className="fa-light fa-envelope" />
                      <input type="text" placeholder="Your Email" name="email" className="form-control" />
                    </div>
                    <div className="form-group col-12">
                      <input type="date" name="date" className="form-control" min={currentDate} value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
                    </div>
                    <div className="form-group col-12">
                      <input type="text" name="time" className="form-control" placeholder="Appointment Time	" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} />
                    </div>
                    <div className="form-group col-12">
                      <input type="text" name="messageStatus" className="form-control" hidden value="UnAccept" />
                    </div>
                    <div className="form-group col-12">
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={3}
                        className="form-control"
                        placeholder="Write message...."
                        defaultValue={""}
                      />
                      <i className="fal fa-comment" />
                    </div>
                    <div className="form-btn col-12">
                      <button className="xb-btn xb-btn--advisor fw-btn">Appointment Now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceSection;
