import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';


const EditFooterContact = () => {

    const [footerad, setAddressfooter] = useState([]);

    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/footer-address/${id}`)
            .then((res) => res.json())
            .then((info) => setAddressfooter(info));
    }, []);


    const handlefooterAddress = (event) => {
        event.preventDefault();

        const phoneNumber = event.target.phoneNumber.value;
        const emailAddress = event.target.emailAddress.value;
        const location = event.target.location.value;
      




        const contactSection = {

            phoneNumber,
            emailAddress,
            location,
         




        };

        const url = `http://localhost:5000/footer-address/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(contactSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Footer Address is Updated');
            });
    };



    return (
        <>
        <HeaderBottom></HeaderBottom>
        <div className='container  mt-5 mb-5'>
        <section id="services" class="services-area pt-120 pb-90 fix mt-5 " >



            <div class="container">
                <div class="row d-flex justify-content-center">

                </div>
                <div class="row mt-5 mb-5">

                    <div class="col-lg-8 col-md-12 mt-5">
                        <h2 className='mb-5'> Update Footer Contact </h2>
                        <form class="contact-form " onSubmit={handlefooterAddress}>
                            <div class="row d-flex justify-content-center">

                                <div className="col-lg-12 col-md-12 mb-3">
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-lg shadow-lg" name="phoneNumber" defaultValue={footerad.phoneNumber} placeholder="Your Phone" required />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 mb-3">
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-lg shadow-lg" name="emailAddress" defaultValue={footerad.emailAddress} placeholder="Your email" required />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 mb-3">
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-lg shadow-lg" name="location" defaultValue={footerad.location} placeholder="Your Location" required />
                                    </div>
                                </div>
                              
                                <div class="slider-btn">
                                    <button class="xb-btn xb-btn--advisor" data-delay=".8s"> Update Address Details</button>
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

export default EditFooterContact;