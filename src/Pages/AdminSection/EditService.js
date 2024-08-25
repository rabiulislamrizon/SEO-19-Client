import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditService = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/service-item/${id}`)
            .then((res) => res.json())
            .then((info) => setItem(info));
    }, []);

    const handleAddItem = (event) => {
        event.preventDefault();

        const serviceIcon = event.target.serviceIcon.value;
        const serviceTitle = event.target.serviceTitle.value;
        const serviceDetails = event.target.serviceDetails.value;

        const itemSection = {

            serviceIcon,
            serviceTitle,
            serviceDetails,
        };

        const url = `http://localhost:5000/service-item/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(itemSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Item is Updated');
            });
    };


    return (
        <>

        <HeaderBottom></HeaderBottom>

            <div className='container mt-5 mb-100 d-flex align-items-center justify-content-center'>
                <form class="contact-form" onSubmit={handleAddItem}>
                    <div class="row">

                        <div className="col-lg-12 col-md-12 mb-3">
                            <div className="form-group">
                                <input type="text" className="form-control" name="serviceIcon" defaultValue={item.serviceIcon} placeholder="Service Image" required />
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12 mb-3">
                            <div className="form-group">
                                <input type="text" className="form-control" name="serviceTitle" defaultValue={item.serviceTitle} placeholder="Service Title" required />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 mb-3">
                            <div className="form-group">
                                <input type="text" className="form-control" name="serviceDetails" defaultValue={item.serviceDetails} placeholder="Service Details" required />
                            </div>
                        </div>



                        <div class="slider-btn">
                            <button class="xb-btn xb-btn--advisor mb-5" data-animation="fadeInRight" data-delay=".8s"> Update service </button>
                        </div>
                    </div>

                </form>

            </div>

        </>
    );
};

export default EditService;