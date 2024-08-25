import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const VideoSection = () => {

    const [video, setVideo] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/videos`)
            .then((res) => res.json())
            .then((info) => setVideo(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/videos-items`)
            .then((res) => res.json())
            .then((info) => setItems(info));
    }, []);


    const handleVideoSection = (event) => {
        event.preventDefault();
        const headingVideo = event.target.headingVideo.value;
        const videoImage = event.target.videoImage.value;
        const videoLink = event.target.videoLink.value;



        const videoSection = {
            headingVideo,
            videoImage,
            videoLink,



        };

        const url = `http://localhost:5000/add-video`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(videoSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Video Section is Updated');
            });
    };

    const handleAddItem = (event) => {
        event.preventDefault();
        const videoItemIcon = event.target.videoItemIcon.value;
        const videoItemTitle = event.target.videoItemTitle.value;
        const videoItemDetails = event.target.videoItemDetails.value;


        const itemSection = {
            videoItemIcon,
            videoItemTitle,
            videoItemDetails,


        };

        const url = `http://localhost:5000/add-video-item`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(itemSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Team Members Item is Added');
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
                                <h2 className='mb-5 mt-5'> Update Video Section </h2>
                                {
                                    video.length === 1 &&
                                    <> {
                                        video.map(s => <Link className='xb-btn xb-btn--advisor' to={`/videotext-edit/${s._id}`}>Update Video</Link>)
                                    }</>

                                }
                                {
                                    video.length === 0 &&
                                    <form class="contact-form " onSubmit={handleVideoSection}>
                                        <div class="row">


                                            <div class="col-lg-12 mb-3">
                                                <div class="contact-field p-relative c-name mb-20">
                                                    <input type="text" className="form-control" name="headingVideo" placeholder="Video Section Heading" required />
                                                </div>
                                            </div>

                                            <div class="col-lg-12 mb-3">
                                                <div class="contact-field p-relative c-name mb-20">
                                                    <input type="text" className="form-control" name="videoImage" placeholder="Video Image URL" required />
                                                </div>
                                            </div>
                                            <div class="col-lg-12 mb-3">
                                                <div class="contact-field p-relative c-name mb-20">
                                                    <input type="text" className="form-control" name="videoLink" placeholder="Video Link URL" required />
                                                </div>
                                            </div>


                                            <div class="slider-btn">
                                                <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s"> Update Video Section </button>
                                            </div>
                                        </div>

                                    </form>
                                }

                                <h2 className='mb-5 mt-5'>Add Video Section Item</h2>
                                <form class="contact-form" onSubmit={handleAddItem}>
                                    <div class="row">
                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" className="form-control" name="videoItemIcon" placeholder="Video Section Icon" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" className="form-control" name="videoItemTitle" placeholder="Video Item Title" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" className="form-control" name="videoItemDetails" placeholder="Video Item Details" required />
                                            </div>
                                        </div>



                                        <div class="slider-btn">
                                            <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s"> Add Team Member </button>
                                        </div>
                                    </div>

                                </form>



                            </div>



                            <div className="row">

                                {
                                    items.map(i => <div className="col col-lg-3 col-md-6 col-sm-6 mt-5 mb-5">
                                        <div className="iconbox_item">
                                            <div className="title_wrap">
                                                <div className="item_icon">

                                                    <img src={i.videoItemIcon} alt="Icon" />

                                                </div>
                                                <h3 className="item_title mb-0">
                                                    

                                                    <h4 className="name"><Link to={`/video/${i._id}`}>{i.videoItemTitle}</Link></h4>

                                                </h3>
                                            </div>
                                            <p className="mb-0">
                                                {i.videoItemDetails}
                                            </p>
                                        </div>
                                    </div>)
                                }




                            </div>

                        </div>
                    </div>

                </section>

            </div>

        </>
    );
};

export default VideoSection;