import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderBottom from '../components/HomePage/HeaderBottom';

const OrderNow = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { id } = useParams();
    const [prices, setPrice] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/pricing/${id}`)
            .then((res) => res.json())
            .then((info) => setPrice(info));
    }, []);
    const generateUniquePaymentId = () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let paymentId = "";
        for (let i = 0; i < 8; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            paymentId += characters.charAt(randomIndex);
        }
        return paymentId;
    };


    const handleNewOrder = (event) => {
        event.preventDefault();
        const paymentId = generateUniquePaymentId();
        const packagePrice = event.target.packagePrice.value;
        const packageName = event.target.packageName.value;
        const customerEmail = event.target.customerEmail.value;
        const customerName = event.target.customerName.value;
        const customerAddress = event.target.customerAddress.value;
        const customerCountry = event.target.customerCountry.value;
        const paymentStatus = event.target.paymentStatus.value;
        const orderStatus = event.target.orderStatus.value;
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });


        const order = {
            paymentId,
            packageName,
            packagePrice,
            customerEmail,
            customerName,
            customerAddress,
            customerCountry,
            paymentStatus,
            orderStatus,
            orderDate: formattedDate,

        };

        const url = `http://localhost:5000/new-order`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((result) => {
                navigate('/pending-order');
            });
    };


    return (
        <>
            <HeaderBottom></HeaderBottom>
            <section id="services" class="services-area  pb-90 fix mb-5 mt-5" >
                <div class="container">
                    <div class="row d-flex justify-content-center">

                        <h2>You Buying This SEO Plan</h2>

                    </div>
                    <div class="row d-flex justify-content-center">

                        <form class="contact-form mt-5" onSubmit={handleNewOrder}>
                            <div class="row">

                                <div className="col-12 mb-3">
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-lg shadow-lg" name="packageName" value={prices.packageName} placeholder="Package Name" required />
                                    </div>
                                </div>
                                <div className="col-12 mb-3">
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-lg shadow-lg" name="packagePrice" value={prices.packagePrice} required />
                                    </div>
                                </div>
                                <div className="col-12 mb-3">
                                    <div className="form-group">
                                        <input disabled type="email" value={user?.email} name="customerEmail" className="form-control form-control-lg shadow-lg" required />
                                    </div>
                                </div>
                                <div className="col-12 mb-3">
                                    <div className="form-group">
                                        <input type="text" name="customerName" className="form-control form-control-lg shadow-lg" placeholder="Full Name" required />
                                    </div>
                                </div>
                                <div className="col-12 mb-3">
                                    <div className="form-group">
                                        <input type="text" name="customerAddress" className="form-control form-control-lg shadow-lg" placeholder="Your Address" required />
                                    </div>
                                </div>
                                <div className="col-12 mb-3">
                                    <div className="form-group">
                                        <input type="text" name="customerCountry" className="form-control form-control-lg shadow-lg" placeholder="Your Country" required />
                                    </div>
                                </div>

                                <div class="col-lg-12 ">
                                    <div class="contact-field p-relative c-subject mb-20">
                                        <input type="text" hidden id="text" value='UnPaid' name="paymentStatus" required />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-subject mb-20">
                                        <input type="text" hidden id="text" value='Pending' name="orderStatus" required />
                                    </div>
                                </div>
                                <div class="slider-btn d-flex justify-content-center">
                                    <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s">Place Order Now</button>
                                </div>

                            </div>



                        </form>



                    </div>
                </div>
            </section>
        </>
    );
};

export default OrderNow;