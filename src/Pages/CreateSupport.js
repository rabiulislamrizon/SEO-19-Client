import React, { useEffect, useState } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import HeaderBottom from '../components/HomePage/HeaderBottom';
import auth from '../firebase.init';


const CreateSupport = () => {

    const [user] = useAuthState(auth);
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const date = new Date();
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });
        setCurrentDate(formattedDate);
    }, []);

    const handleTicket = (event) => {
        event.preventDefault();
        const customerEmail = event.target.customerEmail.value;
        const tickteDate = event.target.tickteDate.value;
        const ticketName = event.target.ticketName.value;
        const ticketsubject = event.target.ticketsubject.value;
        const ticketmessage = event.target.ticketmessage.value;
        const ticketStatus = event.target.ticketStatus.value;
       

        const addItem = {
            customerEmail,
            tickteDate,
            ticketName,
            ticketsubject,
            ticketmessage,
            ticketStatus,
           
        };

        const url = `http://localhost:5000/add-ticket`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addItem),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Your Ticket is Submitted');
            });
    };

    return (
        <>
            <HeaderBottom />

            <section id="services" className="services-area vh-100">
                <div className="container">
                    <div className="row">
                        <h2>Subject Your Ticket</h2>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <form className="contact-form mt-5" onSubmit={handleTicket}>
                            <div className="row justify-content-center">

                                <div className="col-12 mb-3">
                                    <div className="form-group">
                                        <input disabled type="email"  value={user?.email} name="customerEmail" className="form-control" required />
                                    </div>
                                </div>

                                <div className="col-12 mb-3">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="tickteDate" value={currentDate} placeholder='Your Date' required readOnly />
                                    </div>
                                </div>

                               
                                <div className="col-12 mb-3">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="ticketName" placeholder="Your Name" required />
                                    </div>
                                </div>

                                <div className="col-12 mb-3">
                                    <div className="form-group">
                                        <input type="text" name="ticketsubject" className="form-control" placeholder="Your Subject" required />
                                    </div>
                                </div>
                                <div className="col-12 mb-3">
                                    <div className="form-group">
                                        <textarea name="ticketmessage" className="form-control" id="message" cols={30} rows={8} required data-error="Write your message" placeholder="Your Message" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="contact-field p-relative c-subject mb-20">
                                        <input type="text" hidden id="text" value='UnRead'  name="ticketStatus" required />
                                    </div>
                                </div>
                                
                                <div className="slider-btn d-flex justify-content-center">
                                    <button className="btn btn-primary" data-animation="fadeInRight" data-delay=".8s">Ticket Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CreateSupport;