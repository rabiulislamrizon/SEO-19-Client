import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TestimonialSection from './../../components/HomePage/TestimonialSection';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const AddTestimonial = () => {


    const [testimonialtext, setTestimonialText] = useState([]);

    const [testimonials, settestimonials] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/testimonialtext`)
            .then((res) => res.json())
            .then((info) => setTestimonialText(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/testimonials`)
            .then((res) => res.json())
            .then((info) => settestimonials(info));
    }, []);

    const handleTestimonialSection = (event) => {
        event.preventDefault();
        const testimonialText = event.target.testimonialText.value;
        const testimonialHeading = event.target.testimonialHeading.value;


        const testimonialSection = {
            testimonialText,
            testimonialHeading,


        };

        const url = `http://localhost:5000/add-testimonial-text`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(testimonialSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Service is Updated');
            });
    };





    const handleStepSection = (event) => {
        event.preventDefault();
        const image = event.target.image.value;
        const personName = event.target.personName.value;
        const personTitle = event.target.personTitle.value;
        const desc = event.target.desc.value;



        const stepSection = {
            image,
            personName,
            personTitle,
            desc,

        };

        const url = `http://localhost:5000/add-testimonial`;
        fetch(url, {
            method: "POST",
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
            <section id="services" class="services-area  pb-90 fix d-flex justify-content-center ">
                <div className='mt-5 '>
                    <div class="container">
                        <div class="row">

                        </div>
                        <div class="row ">

                            <div class="col-lg-8 col-md-12">

                                <h3 className='mb-5'> Update Testimonial Text </h3>
                                {
                                    testimonialtext.length === 1 &&
                                    <>
                                        {testimonialtext.map(text =>
                                            <Link className='xb-btn xb-btn--advisor' to={`/testimonialtext-edit/${text._id}`}> Update Now</Link>
                                        )}
                                    </>
                                }

                                {testimonialtext.length === 0 &&
                                    <form class="contact-form " onSubmit={handleTestimonialSection}>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="contact-field p-relative c-name mb-20">
                                                    <input type="text" className="form-control form-control-lg shadow-lg " id="firstn" name="testimonialText" placeholder=" Testimonial Text" required />
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div class="contact-field p-relative c-name mb-20">
                                                    <input type="text" className="form-control form-control-lg shadow-lg " id="firstn" name="testimonialHeading" placeholder="Testimonial Heading" required />
                                                </div>
                                            </div>




                                            <div class="slider-btn">
                                                <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s"> Update Testimonial Text </button>
                                            </div>
                                        </div>

                                    </form>
                                }





                                {/* <h3 className='mb-5 mt-5 text-align '> Add Testimonial Item </h3> */}

                                {/* <form class="contact-form " onSubmit={handleStepSection}>
                                    <div class="row">
                                        <div class="col-lg-12 " >
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input className="form-control mb-3" name="image" placeholder="Person Image URL" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input className="form-control mb-3" name="personName" placeholder="Person Name" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input className="form-control mb-3" name="personTitle" placeholder="Person Title" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input className="form-control mb-3" name="desc" placeholder="Details" required />
                                            </div>
                                        </div>

                                        <div class="slider-btn">
                                            <button class="xb-btn xb-btn--advisor" data-delay=".8s"> Add Testimonial</button>
                                        </div>
                                    </div>

                                </form> */}

                            </div>


                        </div>
                    </div>
                    <div className="container mt-50">
                        <div className="row d-flex justify-content-center  ">
                            {
                                testimonials.map(t => <div className="testimonial_carousel mb-5  ">
                                    <div className="common_carousel_2col" >
                                        <div className="carousel_item">
                                            <div className="testimonial_item">
                                                <div className="testimonial_image">
                                                </div>
                                                <div className="testimonial_content">
                                                    <h2>{t.personName}</h2>
                                                    <h6 className="testimonial_name">{t.personTitle}</h6>
                                                    <p>
                                                        {t.desc}
                                                    </p>
                                                    <Link to={`/edit-testimonial/${t._id}`} class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s"> Edit Now </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>


                </div>
            </section></>

    );
};

export default AddTestimonial;