import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../components/HomePage/HeaderBottom';


const MessageNow = () => {
    const [ticket, setTicket] = useState({});
    const [replies, setReplies] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        // Fetch ticket details including replies
        fetch(`http://localhost:5000/ticket/${id}`)
            .then((res) => res.json())
            .then((info) => {
                setTicket(info);
                setReplies(info.replies || []); // Assuming replies are part of the ticket info
            });
    }, [id]);

    const handleReply = (event) => {
        event.preventDefault();

        const newReply = {
            user_id: "user", 
            ticketmessage: event.target.ticketmessage.value,
            replyDate: new Date().toLocaleString(),
        };

        const updatedReplies = [...replies, newReply];

        // Update ticket with new reply
        const url = `http://localhost:5000/ticket/${ticket._id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ ...ticket, replies: updatedReplies }),
        })
            .then((res) => res.json())
            .then((result) => {
                setReplies(updatedReplies);
                event.target.reset(); // Reset the form after submission
            });
    };

    return (
        <>
            <HeaderBottom />
            <section id="services" className="services-area mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>Sender Date: {ticket.tickteDate}</h4>
                            <h4>Sender Name: {ticket.ticketName}</h4>
                            <h4>Sender Email: {ticket.customerEmail}</h4>
                            <h4>Sender Subject: {ticket.ticketsubject}</h4>
                            <p>Message: {ticket.ticketmessage}</p>

                            <div className="mt-4">
                                <h5>Replies:</h5>
                                {replies.length > 0 ? (
                                    replies.map((reply, index) => (
                                        <div key={index} className="border p-3 mb-3">
                                            <strong>{reply.user_id === "admin" ? "Admin" : "User"}:</strong>
                                            <p>{reply.ticketmessage}</p>
                                            <small className="text-muted">{reply.replyDate}</small>
                                        </div>
                                    ))
                                ) : (
                                    <p>No replies yet.</p>
                                )}
                            </div>

                            <form onSubmit={handleReply} className="mt-5">
                                <div className="form-group mb-3">
                                    <textarea
                                        name="ticketmessage"
                                        className="form-control"
                                        placeholder="Write your reply here..."
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Send Reply</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MessageNow;