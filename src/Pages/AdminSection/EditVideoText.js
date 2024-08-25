import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditVideoText = () => {

    const [videotext, setVideo] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/videos/${id}`)
            .then((res) => res.json())
            .then((info) => setVideo(info));
    }, []);




    const handleVideoText = (event) => {
        event.preventDefault();
        const headingVideo = event.target.headingVideo.value;
        const videoImage = event.target.videoImage.value;
        const videoLink = event.target.videoLink.value;
       


        const videoSection = {
            headingVideo,
            videoImage,
            videoLink,
          


        };

        const url = `http://localhost:5000/update-videos/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(videoSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Video Text is Updated');
            });
    };




    return (
        <>

        <HeaderBottom></HeaderBottom>
        
        <div>
            {
                <section id="services" class="services-area pt-120 pb-90 fix mb-5" >
                    <div class="container">
                        <div class="row">

                        </div>
                        <div class="row">

                            <div class="col-lg-8 col-md-12">
                                <h2 className='mb-5'> Update Video Text </h2>

                                <form class="contact-form " onSubmit={handleVideoText}>
                                    <div class="row">
                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" className="form-control" name="headingVideo" defaultValue={videotext.headingVideo} placeholder="Heading Video" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" className="form-control" name="videoImage" defaultValue={videotext.videoImage} placeholder="Video Image URL" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" className="form-control" name="videoLink" defaultValue={videotext.videoLink} placeholder="Video URL" required />
                                            </div>
                                        </div>
                                      

                                        <div class="slider-btn">
                                            <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s"> Update Video Text</button>
                                        </div>
                                    </div>

                                </form>



                            </div>



                        </div>
                    </div>

                </section>
            }
        </div>
        </>
    );
};

export default EditVideoText;