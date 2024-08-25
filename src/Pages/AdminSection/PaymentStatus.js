import React, { useEffect, useState } from 'react';
import './Admin.css';
import { Link, useParams } from 'react-router-dom';
import AdminMenu from '../../components/AdminMenu';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const PaymentStatus = () => {
    const [order, setOrder] = useState([]);
    const { id } = useParams();



    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`)
            .then((res) => res.json())
            .then((info) => setOrder(info));
    }, []);

    const handlePaymentStatus = (event) => {
        event.preventDefault();
        const paymentStatus = event.target.paymentStatus.value;



        const status = {
            paymentStatus,
        };

        const url = `http://localhost:5000/order/${order._id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(status),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('PaymentStatus is Updated');
            });
    };


    const handleOrderStatus = (event) => {
        event.preventDefault();

        const orderStatus = event.target.orderStatus.value;



        const orderSec = {

            orderStatus,
        };

        const url = `http://localhost:5000/order-status/${order._id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(orderSec),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('OrderStatus is Updated');
            });
    };

    return (
        <>
            <HeaderBottom></HeaderBottom>
            <div className='container'>
                <section id="services" class="services-area  pb-90 fix mb-5 mt-5">
                    <div class="container">
                        <div class="row"></div>
                        <div class="row justify-content-center">

                            <div className='text-center'> {/* Center-align the content */}
                                

                                <h2>Update Payment Status</h2>

                                <form onSubmit={handlePaymentStatus} className="text-center"> {/* Center-align the form */}
                                    <div class="col-lg-6 mx-auto"> {/* Center-align the select dropdown */}
                                        <div class="contact-field p-relative c-name mb-20">
                                            <select className='form-control' name="paymentStatus" id="cars">
                                                <option value="UnPaid">UnPaid</option>
                                                <option value="Paid">Paid</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="slider-btn">
                                        <button class="xb-btn xb-btn--advisor mt-2" data-animation="fadeInRight" data-delay=".8s"> Update Payment </button>
                                    </div>
                                </form>

                                <h2 className='mt-5'>Update Order Status</h2>

                                <form onSubmit={handleOrderStatus} className="text-center"> {/* Center-align the form */}
                                    <div class="col-lg-6 mx-auto"> {/* Center-align the select dropdown */}
                                        <div class="contact-field p-relative c-name mb-20">
                                            <select className='form-control' name="orderStatus" id="cars">
                                                <option value="Pending">Pending</option>
                                                <option value="Delivered">Delivered</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="slider-btn">
                                        <button class="xb-btn xb-btn--advisor mt-2" data-animation="fadeInRight" data-delay=".8s"> Update Order </button>
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

export default PaymentStatus;