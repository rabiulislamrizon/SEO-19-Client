import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TestimonialSection from './../../components/HomePage/TestimonialSection';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditTestimonial = () => {


    const [testimonial, setTestimonial] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/testimonial/${id}`)
            .then((res) => res.json())
            .then((info) => setTestimonial(info));
        console.log(testimonial)
    }, []);


    const handleTestimonialSection = (event) => {
        event.preventDefault();
        const image = event.target.image.value;
        const personName = event.target.personName.value;
        const personTitle = event.target.personTitle.value;
        const desc = event.target.desc.value;



        const stepSection = {
            image,
            personName,
            personTitle,
            desc



        };

        const url = `http://localhost:5000/testimonial/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(stepSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Step Section is Updated');
            });
    };



    return (
        <>
        <HeaderBottom></HeaderBottom>

            <div className='container vh-100 d-flex align-items-center justify-content-center mb-5'>
                <section id="services" class="services-area  pb-90 fix mb-5" >



                    <div class="container">
                        <div class="row">

                        </div>
                        <div class="row d-flex justify-content-center">

                            <div class="col-lg-8 col-md-12 mb-5">
                                <h3 className='mb-5'> Update Testimonial </h3>

                                <form class="contact-form " onSubmit={handleTestimonialSection}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input  className="form-control mb-3" name="image" defaultValue={testimonial.image} required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input  className="form-control mb-3" name="personName" defaultValue={testimonial.personName} required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input  className="form-control mb-3" name="personTitle" defaultValue={testimonial.personTitle} required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input  className="form-control mb-3" name="desc" defaultValue={testimonial.desc} required />
                                            </div>
                                        </div>

                                        <div class="slider-btn">
                                            <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s"> Update Testimonial </button>
                                        </div>
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

export default EditTestimonial;