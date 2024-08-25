import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TestimonialSection from './../../components/HomePage/TestimonialSection';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditTestimonialtext = () => {


    const [testimonialtext, setTestimonialText] = useState([]);

    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/testimonialtext/${id}`)
            .then((res) => res.json())
            .then((info) => setTestimonialText(info));
    }, []);



    const handleTestimonialSection = (event) => {
        event.preventDefault();
        const testimonialText = event.target.testimonialText.value;
        const testimonialHeading = event.target.testimonialHeading.value;
     

        const testimonialSection = {
            testimonialText,
            testimonialHeading,
            
        };

        const url = `http://localhost:5000/testimonialtext/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(testimonialSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Testimonial Text Is Updated');
            });
    };








    return (
        <> 
        <HeaderBottom></HeaderBottom>
        <section id="services" class="services-area pb-90 fix mb-5">
        <div className='mt-5'>
            <div class="container">
                <div class="row">

                </div>
                <div class="row d-flex justify-content-center">

                    <div class="col-lg-8 col-md-12">

                        <h3 className='mb-5'> Update Testimonial Text </h3>

                        <form class="contact-form " onSubmit={handleTestimonialSection}>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-name mb-20">
                                        <input  className="form-control mb-3" name="testimonialText" defaultValue={testimonialtext.testimonialText} placeholder="Testimonial Text" required />
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-name mb-20">
                                        <input className="form-control mb-3" name="testimonialHeading" defaultValue={testimonialtext.testimonialHeading} placeholder="Testimonial Heading" required />
                                    </div>
                                </div>

                               


                                <div class="slider-btn">
                                    <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s"> Update Testimonial Text </button>
                                </div>
                            </div>

                        </form>



                    </div>


                </div>
            </div>





        </div>
    </section></>
       
    );
};

export default EditTestimonialtext;