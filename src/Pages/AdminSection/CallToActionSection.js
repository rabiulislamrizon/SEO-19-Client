import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const CallToActionSection = () => {

    const [action, setAction] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/actions`)
            .then((res) => res.json())
            .then((info) => setAction(info));
    }, []);


    const handleActionSection = (event) => {
        event.preventDefault();
        const heading = event.target.heading.value;
        const subHeading = event.target.subHeading.value;
        



        const actionSection = {
            heading,
            subHeading,
           


        };

        const url = `http://localhost:5000/add-action`;
        fetch(url, {
            method: "POST",
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
                                <h2 className='mb-5'>Update Call To Action </h2>

                                {
                                    action.length === 1 &&
                                    <>
                                        {

                                            action.map(c =>
                                                <Link className='xb-btn xb-btn--advisor' to={`/edit-call/${c._id}`}> Edit Call To Action</Link>)

                                        }
                                    </>
                                }
                                {
                                    action.length === 0 &&

                                    <form class="contact-form " onSubmit={handleActionSection}>
                                        <div class="row">

                                            <div className="col-lg-12 col-md-12 mb-3">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="heading" placeholder="Heading" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 mb-3">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="subHeading" placeholder="Details" required />
                                                </div>
                                            </div>
                                            <div class="slider-btn mb-3">
                                                <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s">Add Call To Action</button>
                                            </div>
                                        </div>

                                    </form>
                                }


                            </div>


                        </div>
                    </div>
                </section>
            </div>
        </>

    );
};

export default CallToActionSection;