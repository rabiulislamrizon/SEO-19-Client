import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const AddExperience = () => {

    const [exprience, setExperience] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/experiences`)
            .then((res) => res.json())
            .then((info) => setExperience(info));
    }, []);



    const handleExperienceSection = (event) => {
        event.preventDefault();

        const experienceText = event.target.experienceText.value;
        const experienceHeading = event.target.experienceHeading.value;
        const experienceDetails = event.target.experienceDetails.value;
        const skillOneText = event.target.skillOneText.value;
        const skillOneNumber = event.target.skillOneNumber.value;
        const skillTwoText = event.target.skillTwoText.value;
        const skillTwoNumber = event.target.skillTwoNumber.value;
        const skillThreeText = event.target.skillThreeText.value;
        const skillThreeNumber = event.target.skillThreeNumber.value;
       




        const experienceSection = {

            experienceText,
            experienceHeading,
            experienceDetails,
            skillOneText,
            skillOneNumber,
            skillTwoText,
            skillTwoNumber,
            skillThreeText,
            skillThreeNumber,



        };

        const url = `http://localhost:5000/add-experience`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(experienceSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Experience Section is Updated');
            });
    };



    return (
        <>
            <HeaderBottom></HeaderBottom>
            <section id="services" class="services-area pt-120 pb-90 fix mb-4" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h2> Update Experience </h2>

                            {
                                exprience.length === 1 &&
                                <>
                                    {
                                        exprience.map(a =>
                                            <Link className='xb-btn xb-btn--advisor' to={`/edit-experience/${a._id}`}>
                                                Update Exprience Section
                                            </Link>
                                        )
                                    }
                                </>
                            }
                            {
                                exprience.length === 0 &&


                                <form class="contact-form " onSubmit={handleExperienceSection}>
                                    <div class="row">

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="experienceText" placeholder="Section Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="experienceHeading" placeholder="Section Heading" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea type="text" className="form-control" name="experienceDetails" placeholder="Section Details" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="skillOneText" placeholder="Skill One Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="skillOneNumber" placeholder="Skill One Number" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="skillTwoText" placeholder="Skill Two Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="skillTwoNumber" placeholder="Skill Two Number" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="skillThreeText" placeholder="Skill Three Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="skillThreeNumber" placeholder="Skill Three Number" required />
                                            </div>
                                        </div>
                                        
                                        
                                        <div class="slider-btn">
                                            <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s"> Update Experience </button>
                                        </div>
                                    </div>

                                </form>
                            }



                        </div>


                    </div>
                </div>
            </section>
        </>
    );
};

export default AddExperience;