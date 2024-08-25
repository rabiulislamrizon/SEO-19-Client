import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parseISO, isValid } from 'date-fns';

const EditProject = () => {
    const [project, setProject] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`)
            .then((res) => res.json())
            .then((info) => {
                setProject(info);
                const parsedDate = parseISO(info.projectDate);
                if (isValid(parsedDate)) {
                    setStartDate(parsedDate);
                }
            });
    }, [id]);

    const handleProject = (event) => {
        event.preventDefault();
        const projectName = event.target.projectName.value;
        const projectBudget = event.target.projectBudget.value;
        const advancePayment = event.target.advancePayment.value;
        const duePayment = event.target.duePayment.value;
        const projectStatus = event.target.projectStatus.value;

        // Format the date to dd/MM/yyyy
        const formattedDate = format(startDate, 'dd/MM/yyyy');

        const projectEdit = {
            projectDate: formattedDate,
            projectName,
            projectBudget,
            advancePayment,
            duePayment,
            projectStatus,
        };

        const url = `http://localhost:5000/update-project/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(projectEdit),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Project Is Updated');
            });
    };

    return (
        <>
            <HeaderBottom />
            <div>
                <section id="services" className="services-area pt-120 pb-90 fix mb-5 mt-5">
                    <div className="container">
                        <div className="row"></div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8 col-md-12">
                                <h3>Edit Your Project</h3>
                                <form className="contact-form" onSubmit={handleProject}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-name">
                                                <DatePicker
                                                    selected={startDate}
                                                    onChange={(date) => setStartDate(date)}
                                                    className="form-control form-control-lg shadow-lg p-3 mb-3"
                                                    name="projectDate"
                                                    dateFormat="dd/MM/yyyy"
                                                    placeholderText="Project Date"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-name">
                                                <input className="form-control form-control-lg shadow-lg p-3 mb-3" name="projectName" defaultValue={project.projectName} placeholder="Project Name" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-name">
                                                <input className="form-control form-control-lg shadow-lg p-3 mb-3" name="advancePayment" defaultValue={project.advancePayment} placeholder="Advance Payment" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-name">
                                                <input className="form-control form-control-lg shadow-lg p-3 mb-3" name="projectBudget" defaultValue={project.projectBudget} placeholder="Project Budget" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-name">
                                                <input className="form-control form-control-lg shadow-lg p-3 mb-3" name="duePayment" defaultValue={project.duePayment} placeholder="Due Payment" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-name">
                                                <select className="form-control form-control-lg mb-3" name="projectStatus" defaultValue={project.projectStatus}>
                                                    <option value="Running">Running</option>
                                                    <option value="Cancelled">Cancelled</option>
                                                    <option value="Completed">Completed</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="slider-btn">
                                            <button className="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s">Update Project</button>
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

export default EditProject;
