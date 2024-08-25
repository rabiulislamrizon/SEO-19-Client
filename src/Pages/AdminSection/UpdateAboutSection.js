import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const UpdateAboutSection = () => {

    const [about, setAbout] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/about-us/${id}`)
            .then((res) => res.json())
            .then((info) => setAbout(info));
    }, [id]);



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

        const url = `http://localhost:5000/update-about/${id}`;
        fetch(url, {
            method: "PUT",
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

            <section id="services" class="services-area  pb-90 fix mb-5" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row d-flex justify-content-center">

                        <div class="col-lg-8 col-md-12">
                            <h2 className='mb-5'> Update About </h2>



                            <form class="contact-form " onSubmit={handleAboutSection}>
                                <div class="row">

                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-lg shadow-lg" name="aboutImgOne" defaultValue={about.aboutImgOne} placeholder=" Image One" required />
                                        </div>
                                    </div>
                                   
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-lg shadow-lg" name="aboutHeading" defaultValue={about.aboutHeading} placeholder="About Heading" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-lg shadow-lg" name="aboutDetails" defaultValue={about.aboutDetails} placeholder="About Details" required />
                                        </div>
                                    </div>
                                  
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-lg shadow-lg" name="aboutText" defaultValue={about.aboutText} placeholder="About Text" required />
                                        </div>
                                    </div>
                            
                                    <div class="slider-btn">
                                        <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s"> Update About </button>
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

export default UpdateAboutSection;