import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../components/HomePage/HeaderBottom';


const TicketStatus = () => {
    const [ticket, setTicket] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/ticket/${id}`)
            .then((res) => res.json())
            .then((info) => setTicket(info));
    }, [id]);

    const handleTicketStatus = (event) => {
        event.preventDefault();
        const ticketStatus = event.target.ticketStatus.value;

        const statusItem = {
            ticketStatus,
        };

        const url = `http://localhost:5000/ticket/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(statusItem),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Ticket Status is Updated');
            });
    };

    return (
        <>
            <HeaderBottom />
            <div className='container'>
                <section id="services" className="services-area vh-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className='text-center'>
                                <h2>Update Ticket Status</h2>
                                <form onSubmit={handleTicketStatus} className="text-center">
                                    <div className="col-lg-6 mx-auto">
                                        <div className="contact-field p-relative c-name mb-20">
                                            <select className='form-control' name="ticketStatus">
                                                <option value="UnRead">UnRead</option>
                                                <option value="Read">Read</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="slider-btn">
                                        <button className="btn btn-primary mt-2" data-animation="fadeInRight" data-delay=".8s">Update Ticket Status</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default TicketStatus;