import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const PaypalEmail = () => {

    const [paypal, setPaypal] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/paypal-email/${id}`)
            .then((res) => res.json())
            .then((info) => setPaypal(info));
    }, []);


    const handleUpdatePaypal = (event) => {
        event.preventDefault();
        const paypalEmail = event.target.paypalEmail.value;

        const PaypalEmailUpdate = {
            paypalEmail,
        };

        const url = `http://localhost:5000/paypal-email/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(PaypalEmailUpdate),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Paypal Email Updated');
            });
    };



    return (
        <>
        <HeaderBottom></HeaderBottom>
            <section id="services" class="services-area pt-120 pb-90 fix mb-5" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row d-flex justify-content-center">

                        <div class="col-lg-8 col-md-12">

                            <form class="contact-form " onSubmit={handleUpdatePaypal}>
                                <div class="row">
                                   
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="paypalEmail" defaultValue={paypal.paypalEmail} placeholder="Paypal Email" required />
                                        </div>
                                    </div>

                                    <div class="slider-btn">
                                        <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s"> Update Now</button>
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

export default PaypalEmail;