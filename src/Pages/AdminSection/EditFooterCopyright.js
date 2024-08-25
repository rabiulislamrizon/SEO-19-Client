import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditFooterCopyright = () => {

    const [footercopyright, setFooterCopyright] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/copyrights/${id}`)
            .then((res) => res.json())
            .then((info) => setFooterCopyright(info));
    }, []);


    const handleFooterCopyright = (event) => {
        event.preventDefault();
        const copyrightText = event.target.copyrightText.value;




        const FooterCopyrightSection = {
            copyrightText,



        };

        const url = `http://localhost:5000/copyrights/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(FooterCopyrightSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Footer Copy Right Updated');
            });
    };



    return (
        <>
        <HeaderBottom></HeaderBottom>
            <section id="services" class="services-area pt-120 pb-90 fix mb-5 mt-5" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row d-flex justify-content-center">

                        <div class="col-lg-8 col-md-12">




                            <form class="contact-form " onSubmit={handleFooterCopyright}>
                                <div class="row">
                                <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-lg shadow-lg" name="copyrightText" defaultValue={footercopyright.copyrightText} placeholder="Copyright Text" required />
                                        </div>
                                    </div>
                                    

                                    <div class="slider-btn">
                                        <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s"> Update Footer Copyright</button>
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

export default EditFooterCopyright;