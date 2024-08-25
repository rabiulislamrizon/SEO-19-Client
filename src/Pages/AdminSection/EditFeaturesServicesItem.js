import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditFeaturesServicesItem = () => {


    const [featureitems, setFeatureItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/featureitems/${id}`)
            .then((res) => res.json())
            .then((info) => setFeatureItems(info));
        console.log(featureitems)
    }, []);


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

        const url = `http://localhost:5000/update-featureitems/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(featuresSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Feature Items Section is Updated');
            });
    };



    return (
        <>
        <HeaderBottom></HeaderBottom>

            <div className='container vh-100 d-flex align-items-center justify-content-center mb-5'>
                <section id="services" class="services-area pt-120 pb-90 fix mb-5" >



                    <div class="container">
                        <div class="row">

                        </div>
                        <div class="row">

                            <div class="col-lg-8 col-md-12 mb-5">
                                <h3> Update Feature </h3>

                                <form class="contact-form " onSubmit={handleItemSection}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="FeaturesImg" defaultValue={featureitems.FeaturesImg} required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="FeaturesIcon" defaultValue={featureitems.FeaturesIcon} required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="FeaturesText" defaultValue={featureitems.FeaturesText} required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="FeaturesDesc" defaultValue={featureitems.FeaturesDesc} required />
                                            </div>
                                        </div>

                                        <div class="slider-btn">
                                            <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s"> Update Feature </button>
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

export default EditFeaturesServicesItem;