import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditFAQitem = () => {
    const {id} = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/faq-item/${id}`)
            .then((res) => res.json())
            .then((info) => setItem(info));
    }, []);

    const handleAddItem = (event) => {
        event.preventDefault();
        const accodingTitle = event.target.accodingTitle.value;
        const accodingText = event.target.accodingText.value;
        

        const itemSection = {
            accodingTitle,
            accodingText
            
        };

        const url = `http://localhost:5000/faq-item/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(itemSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' FAQ Item is Updated');
            });
    };


    return (
        <div className='container mt-5 vh-100 d-flex align-items-center justify-content-center'>
            <form class="contact-form" onSubmit={handleAddItem}>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="contact-field p-relative c-name mb-20">
                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="accodingTitle" defaultValue={item.accodingTitle} placeholder="FAQ Title" required />
                        </div>
                    </div>

                    <div class="col-lg-12">
                        <div class="contact-field p-relative c-name mb-20">
                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="accodingText" defaultValue={item.accodingText} placeholder="FAQ Text" required />
                        </div>
                    </div>
                 

                    <div class="slider-btn">
                        <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight"  data-delay=".8s"> FAQ Update </button>
                    </div>
                </div>

            </form>

        </div>
    );
};

export default EditFAQitem;