import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditWorkStep = () => {

    const [stepwork, setWork] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/worksec/${id}`)
            .then((res) => res.json())
            .then((info) => setWork(info));
    }, [stepwork]);


    const handleBannerSection = (event) => {
        event.preventDefault();
        const stepNumber = event.target.stepNumber.value;
        const stepTitle = event.target.stepTitle.value;
        const stepDetails = event.target.stepDetails.value;
        const stapIcon = event.target.stapIcon.value;
       
        


        const workSection = {
            stepNumber,
            stepTitle,
            stepDetails,
            stapIcon,
            

        };

        const url = `http://localhost:5000/update-worksec/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(workSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Work Section is Updated');
            });
    };



    return (

        <>
            <HeaderBottom></HeaderBottom>
            <div>
                <section id="services" class="services-area pt-120 pb-90 fix mb-5" >
                    <div class="container">
                        <div class="row">

                        </div>
                        <div class="row">

                            <div class="col-lg-8 col-md-12">
                                <h2> Update Work Step</h2>



                                <form class="contact-form " onSubmit={handleBannerSection}>
                                    <div class="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="stepNumber" defaultValue={stepwork.stepNumber} placeholder="Step Number" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="stepTitle" defaultValue={stepwork.stepTitle} placeholder="Step Title" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="stepDetails" defaultValue={stepwork.stepDetails} placeholder="Step Details" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="stapIcon" defaultValue={stepwork.stapIcon} placeholder="Your Icon URL" required />
                                            </div>
                                        </div>
                                      
                                        <div class="slider-btn">
                                            <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s">Update Work section</button>
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

export default EditWorkStep;