import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';


const EditFooterSocial = () => {

    const [footersocial, setFootersocial] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/footer-social/${id}`)
            .then((res) => res.json())
            .then((info) => setFootersocial(info));
    }, []);


    const handleFootersocial = (event) => {
        event.preventDefault();

        const aboutText = event.target.aboutText.value;
        const youlink = event.target.youlink.value;
        const fblink = event.target.fblink.value;
        const inslink = event.target.inslink.value;






        const footerSection = {
            aboutText,
            youlink,
            fblink,
            inslink,






        };

        const url = `http://localhost:5000/footer-social/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(footerSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Social Link is Updated');
            });
    };



    return (
       <>

       <HeaderBottom></HeaderBottom>
       
       
       <div className='container'>
            <section id="services" class="services-area pt-120 pb-90 fix" >



                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row d-flex justify-content-center">

                        <div class="col-lg-8 col-md-12">
                            <h2 className='mb-5'> Update Footer Text and Socail Link </h2>



                            <form class="contact-form " onSubmit={handleFootersocial}>
                                <div class="row">

                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-lg shadow-lg" name="aboutText" defaultValue={footersocial.aboutText} placeholder="About Text" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-lg shadow-lg" name="youlink" defaultValue={footersocial.youlink} placeholder="YouTube URL" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-lg shadow-lg" name="fblink" defaultValue={footersocial.fblink} placeholder="Facebook URL" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-lg shadow-lg" name="inslink" defaultValue={footersocial.inslink} placeholder="Instagram URL" required />
                                        </div>
                                    </div>



                                    <div class="slider-btn">
                                        <button class="xb-btn xb-btn--advisor" data-delay=".8s"> Update Footer</button>
                                    </div>
                                </div>

                            </form>

                        </div>


                    </div>
                </div>


            </section>
        </div></>
    );
};

export default EditFooterSocial;