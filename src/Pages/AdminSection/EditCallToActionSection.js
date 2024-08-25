import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditCallToActionSection = () => {

    const [call, setAction] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/actions/${id}`)
            .then((res) => res.json())
            .then((info) => setAction(info));
    }, [call]);


    const handleActionSection = (event) => {
        event.preventDefault();
        const heading = event.target.heading.value;
        const subHeading = event.target.subHeading.value;




        const actionSection = {
            heading,
            subHeading,



        };

        const url = `http://localhost:5000/update-actions/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(actionSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Action is Updated');
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
                                <h2 className='mb-5'> Update Action</h2>

                                <form class="contact-form " onSubmit={handleActionSection}>
                                    <div class="row">
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="heading" defaultValue={call.heading} placeholder="Heading" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="subHeading" defaultValue={call.subHeading} placeholder="Heading" required />
                                            </div>
                                        </div>


                                        <div class="slider-btn">
                                            <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s">Update Action</button>
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

export default EditCallToActionSection;