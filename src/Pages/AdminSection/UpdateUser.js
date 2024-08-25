import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';


const UpdateUser = () => {

    const [users, setUser] = useState([]);
    const { id } = useParams();
   

    useEffect(() => {
        fetch(`http://localhost:5000/users/${id}`)
            .then((res) => res.json())
            .then((info) => setUser(info));
    }, []);


    const handleUser = (event) => {
        event.preventDefault();
        const userEmail = event.target.userEmail.value;
        const userRole = event.target.userRole.value;
        
        


        const userEdit = {
            userEmail,
            userRole
            


        };

        const url = `http://localhost:5000/upadete-users/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userEdit),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('User Is Update');
            });
    };



    return (
        <>
        <HeaderBottom></HeaderBottom>
        <div>
        <section id="services" class="services-area pt-120 pb-90 fix mb-5 mt-5" >
            <div class="container">
                <div class="row">

                </div>
                <div class="row d-flex justify-content-center">

                    <div class="col-lg-8 col-md-12">
                        <h3> Update User Email </h3>

                        <form class="contact-form " onSubmit={handleUser}>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-name ">
                                        <input class="form-control form-control-lg shadow-lg p-3 mb-3 bg-white rounded" name="userEmail"  defaultValue={users.userEmail} placeholder="User Email" required />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-name ">
                                        <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="userRole" hidden defaultValue={users.userRole} placeholder="User Role" required />
                                    </div>
                                </div>
                                
                                    <div class="slider-btn ">
                                        <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s"> Update User Email </button>
                                    
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

export default UpdateUser;