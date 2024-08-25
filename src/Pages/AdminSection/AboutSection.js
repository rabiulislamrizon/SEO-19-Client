import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const AboutSection = () => {

    const [about, setAbout] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/about`)
            .then((res) => res.json())
            .then((info) => setAbout(info));
    }, []);



    const handleAboutSection = (event) => {
        event.preventDefault();

        const aboutImgOne = event.target.aboutImgOne.value;
        const aboutHeading = event.target.aboutHeading.value;
        const aboutDetails = event.target.aboutDetails.value;
        const aboutText = event.target.aboutText.value;
        




        const aboutSection = {

            aboutImgOne,
            aboutHeading,
            aboutDetails,
            aboutText,
            



        };

        const url = `http://localhost:5000/add-about`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(aboutSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('About is Updated');
            });
    };



    return (
        <>
            <HeaderBottom></HeaderBottom>
            <section id="services" class="services-area  pb-90 fix mt-5 mb-5" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row d-flex justify-content-center">

                        <div class="col-lg-8 col-md-12">
                            <h2 className='mb-5'> Update About </h2>

                            {
                                about.length === 1 &&
                                <>
                                    {
                                        about.map(a =>
                                            <Link className='xb-btn xb-btn--advisor' to={`/${a._id}`}>
                                                Update About Section
                                            </Link>
                                        )
                                    }
                                </>
                            }
                            {
                                about.length === 0 &&


                                <form class="contact-form " onSubmit={handleAboutSection}>
                                    <div class="row">

                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="aboutImgOne" placeholder="About Image URL" required />
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="aboutHeading" placeholder="About Heading" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="aboutDetails" placeholder="About Details" required />
                                            </div>
                                        </div>
                                      
                                      
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="aboutText" placeholder="About Text" required />
                                            </div>
                                        </div>
                    
                                        <div class="slider-btn">
                                            <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s"> Update About </button>
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

export default AboutSection;