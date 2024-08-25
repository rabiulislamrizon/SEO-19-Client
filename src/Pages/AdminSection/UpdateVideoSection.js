import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const UpdateVideoSection = () => {

    const [video, setVideo] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/videos-items/${id}`)
            .then((res) => res.json())
            .then((info) => setVideo(info));
    }, [id]);


    const handleVideoSection = (event) => {
        event.preventDefault();
        const videoItemIcon = event.target.videoItemIcon.value;
        const videoItemTitle = event.target.videoItemTitle.value;
        const videoItemDetails = event.target.videoItemDetails.value;


        const videoSection = {
            videoItemIcon,
            videoItemTitle,
            videoItemDetails,



        };

        const url = `http://localhost:5000/videos-items/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(videoSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Video Section is Updated');
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
                                <h2 className='mb-5'> Update Video </h2>


                                <form class="contact-form " onSubmit={handleVideoSection}>
                                    <div class="row">
                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text"  className="form-control" name="videoItemIcon" defaultValue={video.videoItemIcon} placeholder="Video Icon URL" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" className="form-control" name="videoItemTitle" defaultValue={video.videoItemTitle} placeholder=" Video Item Title" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" className="form-control" name="videoItemDetails" defaultValue={video.videoItemDetails} placeholder="Video Item Details" required />
                                            </div>
                                        </div>



                                        <div class="slider-btn">
                                            <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s"> Update Video Section </button>
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

export default UpdateVideoSection;