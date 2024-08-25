import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const ServicesSection = () => {

    const [service, setService] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/service`)
            .then((res) => res.json())
            .then((info) => setService(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/service-items`)
            .then((res) => res.json())
            .then((info) => setItems(info));
    }, []);


    const handleServiceSection = (event) => {
        event.preventDefault();
        const servicesubHeading = event.target.servicesubHeading.value;
        const serviceHeading = event.target.serviceHeading.value;


        const serviceSection = {
            servicesubHeading,
            serviceHeading,


        };

        const url = `http://localhost:5000/add-Service`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(serviceSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Service is Updated');
            });
    };

    const handleAddItem = (event) => {
        event.preventDefault();

        const serviceIcon = event.target.serviceIcon.value;
        const serviceTitle = event.target.serviceTitle.value;
        const serviceDetails = event.target.serviceDetails.value;

        const itemSection = {

            serviceIcon,
            serviceTitle,
            serviceDetails,
        };

        const url = `http://localhost:5000/add-service-item`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(itemSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Item is Added');
            });
    };



    return (
        <>
            <HeaderBottom></HeaderBottom>

            <section id="services" class="services-area  pb-90 fix mb-5" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row d-flex justify-content-center">

                        <div class="col-lg-8 col-md-12">
                            <h2 className='mt-5'> Update Service Text </h2>
                            {
                                service.length === 1 &&
                                <> {
                                    service.map(s => <Link className='xb-btn xb-btn--advisor' to={`/servicetext-edit/${s._id}`}>Update Service</Link>)
                                }</>

                            }
                            {
                                service.length === 0 &&
                                <form class="contact-form " onSubmit={handleServiceSection}>
                                    <div class="row">



                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-lg shadow-lg" name="serviceHeading" placeholder="Service Heading" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-lg shadow-lg" name="servicesubHeading" placeholder="Service Sub Heading" required />
                                            </div>
                                        </div>
                                        <div class="slider-btn">
                                            <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s"> Update Services </button>
                                        </div>
                                    </div>

                                </form>
                            }

                            <h2 className='mt-5 mb-5'>Add Service</h2>
                            <form class="contact-form" onSubmit={handleAddItem}>
                                <div class="row">

                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-lg shadow-lg" name="serviceIcon" placeholder="Service Image" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-lg shadow-lg" name="serviceTitle" placeholder="Service Title" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-lg shadow-lg" name="serviceDetails" placeholder="Service Details" required />
                                        </div>
                                    </div>
                                    <div class="slider-btn">
                                        <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s"> Add Service </button>
                                    </div>
                                </div>

                            </form>
                        </div>

                        <div className="row mt-5">
                            {
                                items.map(s => <div className="col col-lg-4">
                                    <div className="course_card style_2">
                                        <div className="item_image">
                                            <a href="course_details.html" data-cursor-text="View">
                                               
                                            </a>
                                        </div>
                                        <div className="item_content">
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <ul className="item_category_list unordered_list">

                                                </ul>

                                            </div>

                                            <h4 className="item_title">
                                                <a href="course_details.html">
                                                    {s.serviceTitle} <br></br>
                                                    <Link to={`/service-edit/${s._id}`} className='xb-btn xb-btn--advisor  mt-2 mb-2'>Edit Services</Link>
                                                </a>
                                            </h4>
                                            <p>{s.serviceDetails}</p>
                                        </div>
                                    </div>
                                </div>)
                            }



                        </div>





                    </div>
                </div>

            </section>

        </>
    );
};

export default ServicesSection;