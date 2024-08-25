import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import HeaderBottom from '../../components/HomePage/HeaderBottom';

const FeaturesServicesAdd = () => {


    const [featurestext, setFeaturesText] = useState([]);

    const [featureitems, setsetFeatures] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/featurestext`)
            .then((res) => res.json())
            .then((info) => setFeaturesText(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/featureitems`)
            .then((res) => res.json())
            .then((info) => setsetFeatures(info));
    }, []);

    const handleFeaturesTextSection = (event) => {
        event.preventDefault();
        const FeaturesText = event.target.FeaturesText.value;
        const FeaturesHeading = event.target.FeaturesHeading.value;


        const featuresTextSection = {
            FeaturesText,
            FeaturesHeading,


        };

        const url = `http://localhost:5000/add-feature-text`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(featuresTextSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Features Text is Updated');
            });
    };





    const handleItemSection = (event) => {
        event.preventDefault();
        const FeaturesImg = event.target.FeaturesImg.value;
        const FeaturesIcon = event.target.FeaturesIcon.value;
        const FeaturesText = event.target.FeaturesText.value;
        const FeaturesDesc = event.target.FeaturesDesc.value;



        const featuresSection = {
            FeaturesImg,
            FeaturesIcon,
            FeaturesText,
            FeaturesDesc,

        };

        const url = `http://localhost:5000/add-feature-Item`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(featuresSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Features Services Section is Updated');
            });
    };



    return (
        <>
            <HeaderBottom></HeaderBottom>
            <section id="services" class="services-area pt-120 pb-90 fix ">
                <div className='mt-5'>
                    <div class="container">
                        <div class="row">

                        </div>
                        <div class="row">

                            <div class="col-lg-8 col-md-12">

                                <h3 className='mt-5'> Update Features Services Text </h3>
                                {
                                    featurestext.length === 1 &&
                                    <>
                                        {featurestext.map(text =>
                                            <Link className='xb-btn xb-btn--advisor' to={`/featurestext-edit/${text._id}`}> Update Now</Link>
                                        )}
                                    </>
                                }

                                {featurestext.length === 0 &&
                                    <form class="contact-form " onSubmit={handleFeaturesTextSection}>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="contact-field p-relative c-name mb-20">
                                                    <input type="text" name="FeaturesText" placeholder="Features Text" required />
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div class="contact-field p-relative c-name mb-20">
                                                    <input type="text" name="FeaturesHeading" placeholder="Features Heading" required />
                                                </div>
                                            </div>

                                            <div class="slider-btn">
                                                <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s"> Add Features Text </button>
                                            </div>
                                        </div>

                                    </form>
                                }




                                <h3 className='mt-5'> Add Feature Service Item </h3>

                                <form class="contact-form " onSubmit={handleItemSection}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="FeaturesImg" placeholder="Features Image URL" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="FeaturesIcon" placeholder="Features Icon URL" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="FeaturesText" placeholder="Features Text" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="FeaturesDesc" placeholder="Features Details" required />
                                            </div>
                                        </div>

                                        <div class="slider-btn">
                                            <button class="xb-btn xb-btn--advisor" data-delay=".8s"> Add Features Item</button>
                                        </div>
                                    </div>

                                </form>

                            </div>


                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title center-align text-center mb-50">

                                    <h3 className='mt-5'> Your Features List</h3>
                                </div>
                            </div>
                        </div>



                        <div className="row gy-4 justify-content-center mb-5">
                            {
                                featureitems.map(s => <div className="col-md-6 col-lg-4">
                                    <div className="feature-card wow fadeInUp">
                                        <div className="feature-card_img global-img">
                                            <img src={s.FeaturesImg} alt="feature" />
                                        </div>
                                        <div className="feature-card_content">
                                            <div className="feature-card_icon"><img src={s.FeaturesIcon} alt="feature" /> </div>
                                            <Link to={`/edit-feature-items/${s._id}`}><h3 className="box-title" class="xb-btn xb-btn--advisor">Edit Now</h3></Link>
                                            <p className="feature-card_text">{s.FeaturesDesc}</p>

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

export default FeaturesServicesAdd;







