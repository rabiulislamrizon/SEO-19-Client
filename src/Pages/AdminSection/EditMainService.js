import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditMainService = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/service-item/${id}`)
            .then((res) => res.json())
            .then((info) => setItem(info));
    }, []);

    const handleAddItem = (event) => {
        event.preventDefault();

        const serviceImg = event.target.serviceImg.value;
        const serviceIcon = event.target.serviceIcon.value;
        const serviceName = event.target.serviceName.value;
        const serviceTitle = event.target.serviceTitle.value;
        const serviceDetails = event.target.serviceDetails.value;

        const itemSection = {

            serviceImg,
            serviceIcon,
            serviceName,
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
        <div className='container mt-5 vh-100 d-flex align-items-center justify-content-center'>
            <form class="contact-form" onSubmit={handleAddItem}>
                <div class="row">

                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <input type="text" className="form-control" name="serviceImg" defaultValue={item.serviceImg} placeholder="Service Image" required />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <input type="text" className="form-control" name="serviceIcon" defaultValue={item.serviceIcon} placeholder="Service Icon" required />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <input type="text" className="form-control" name="serviceName" defaultValue={item.serviceName} hidden placeholder="Service Name" required />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <input type="text" className="form-control" name="serviceTitle" defaultValue={item.serviceTitle} placeholder="Service Title" required />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <input type="text" className="form-control" name="serviceDetails" defaultValue={item.serviceDetails} placeholder="Service Details" required />
                        </div>
                    </div>



                    <div class="slider-btn">
                        <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s"> Update Main service </button>
                    </div>
                </div>

            </form>

        </div>
    );
};

export default EditMainService;