import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditTeamMemberText = () => {


    const [teamtext, setFeaturesText] = useState([]);

    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/teamstext/${id}`)
            .then((res) => res.json())
            .then((info) => setFeaturesText(info));
    }, []);



    const handleTeamTextSection = (event) => {
        event.preventDefault();
        const teamHeading = event.target.teamHeading.value;
        const teamText = event.target.teamText.value;
     

        const teamSection = {
            teamHeading,
            teamText,
            
        };

        const url = `http://localhost:5000/teamstext/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(teamSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Team Text Is Updated');
            });
    };








    return (
        <> 
        <HeaderBottom></HeaderBottom>
        <section id="services" class="services-area pt-120 pb-90 fix mb-5">
        <div className='mt-5'>
            <div class="container">
                <div class="row">

                </div>
                <div class="row">

                    <div class="col-lg-8 col-md-12">

                        <h3> Update Features Text </h3>

                        <form class="contact-form " onSubmit={handleTeamTextSection}>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-name mb-20">
                                        <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="teamHeading" defaultValue={teamtext.teamHeading} placeholder="Features Text" required />
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-name mb-20">
                                        <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="teamText" defaultValue={teamtext.teamText} placeholder="Features Heading" required />
                                    </div>
                                </div>

                                <div class="slider-btn">
                                    <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s"> Update Team Member Text </button>
                                </div>
                            </div>

                        </form>



                    </div>


                </div>
            </div>


        </div>
    </section></>
       
    );
};

export default EditTeamMemberText;