import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';


const AddEmployee = () => {

    const [employee, setEmployee] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/employees`)
            .then((res) => res.json())
            .then((info) => setEmployee(info));
    }, []);


    const handleEmployee = (event) => {
        event.preventDefault();
        const EmployeeName = event.target.EmployeeName.value;
        const EmployeeEmail = event.target.EmployeeEmail.value;
        const EmployeeRole = event.target.EmployeeRole.value;
        



        const employeeAdded = {
            EmployeeName,
            EmployeeEmail,
            EmployeeRole,
            


        };

        const url = `http://localhost:5000/add-employee`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(employeeAdded),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Employee Is Added');
            });
    };



    return (
        <>
        <HeaderBottom></HeaderBottom>
        
            <section id="services" class="services-area  pb-90 fix mb-5 mt-5" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row d-flex justify-content-center">

                        <div class="col-lg-8 col-md-12">
                            <h3> Add Your Employee </h3>

                                <form class="contact-form " onSubmit={handleEmployee}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name ">
                                                <input class="form-control form-control-lg  mb-3 " name="EmployeeName" placeholder="Employee Name" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name ">
                                                <input class="form-control form-control-lg  mb-3  "  name="EmployeeEmail" placeholder="Employee Email" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name ">
                                                <input class="form-control form-control-lg   mb-3"  name="EmployeeRole"  placeholder="Employee Role" required />
                                            </div>
                                        </div>
                                        <div class="slider-btn ">
                                            <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s"> Add Employee </button>

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

export default AddEmployee;