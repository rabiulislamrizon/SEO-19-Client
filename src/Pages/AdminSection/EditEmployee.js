import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';


const EditEmployee = () => {

    const [employees, setEmployee] = useState([]);
    const { id } = useParams();
   

    useEffect(() => {
        fetch(`http://localhost:5000/employees/${id}`)
            .then((res) => res.json())
            .then((info) => setEmployee(info));
    }, []);


    const handleEmployee = (event) => {
        event.preventDefault();
        const EmployeeName = event.target.EmployeeName.value;
        const EmployeeEmail = event.target.EmployeeEmail.value;
        const EmployeeRole = event.target.EmployeeRole.value;
        
        


        const employeeEdit = {
            EmployeeName,
            EmployeeEmail,
            EmployeeRole,
            


        };

        const url = `http://localhost:5000/upadete-employee/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(employeeEdit),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Employee Is Update');
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
                        <h3> Update Your Employee </h3>

                        <form class="contact-form " onSubmit={handleEmployee}>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-name ">
                                        <input class="form-control form-control-lg shadow-lg p-3 mb-3 " name="EmployeeName"  defaultValue={employees.EmployeeName} placeholder="Employee Name" required />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-name ">
                                        <input class="form-control form-control-lg shadow-lg p-3 mb-3 " name="EmployeeEmail"  defaultValue={employees.EmployeeEmail} placeholder="User Role" required />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-name ">
                                        <input class="form-control form-control-lg shadow-lg p-3 mb-3 " name="EmployeeRole"  defaultValue={employees.EmployeeRole} placeholder="Employee Role" required />
                                    </div>
                                </div>
                                
                                    <div class="slider-btn ">
                                        <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s"> Update Employee </button>
                                    
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

export default EditEmployee;