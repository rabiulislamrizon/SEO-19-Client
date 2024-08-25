import React, { useEffect, useState } from 'react';
import HeaderBottom from '../../components/HomePage/HeaderBottom';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';


const AddSubscribtion = () => {
    const { id } = useParams();
    const [subscribtion, setSubscribtion] = useState([]);
   
   

    useEffect(() => {
        fetch(`http://localhost:5000/get-subscribtion/${id}`)
            .then((res) => res.json())
            .then((info) => setSubscribtion(info));
    }, [id]);

    const handleSubscribtion = (event) => {
        event.preventDefault();
        const subscriptionStatus = event.target.subscriptionStatus.value;
        const subscriptionStart = event.target.subscriptionStart.value;
        const subscriptionDuration = event.target.subscriptionDuration.value;
       


        const subscribtionAdded = {
            subscriptionStatus,
            subscriptionStart,
            subscriptionDuration,
           
        };

        const url = `http://localhost:5000/add-subscribtion`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(subscribtionAdded),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Subscribtion Is Added');
               
            });
    };

    return (
        <>
            <HeaderBottom></HeaderBottom>
            <section id="services" className="services-area pb-90 fix mb-5 mt-5">
                <div className="container">
                    <div className="row"></div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8 col-md-12">
                            <h3>Add Your Subscribtion</h3>
                            <form className="contact-form" onSubmit={handleSubscribtion}>
                                <div className="row">
                                
                                    <div className="col-lg-12">
                                        <div className="contact-field p-relative c-name">
                                            <input className="form-control form-control-lg mb-3" name="subscriptionStatus"   value="Active" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact-field p-relative c-name">
                                            <input className="form-control form-control-lg mb-3" name="subscriptionStart" placeholder="c Start" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact-field p-relative c-name">
                                            <input className="form-control form-control-lg mb-3" name="subscriptionDuration" placeholder="Subscription Duration" required />
                                        </div>
                                    </div>
                                    <div className="slider-btn">
                                        <button className="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s">Add Subscription</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AddSubscribtion;
