import React, { useEffect, useState } from 'react';
import './Admin.css';
import { Link, useParams } from 'react-router-dom';
import AdminMenu from '../../components/AdminMenu';
import HeaderBottom from '../../components/HomePage/HeaderBottom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [currentPageOrders, setCurrentPageOrders] = useState(1);
    const [currentPageSubscribers, setCurrentPageSubscribers] = useState(1);
    const [ordersPerPage] = useState(10); // Adjust the number of orders per page
    const [subscribersPerPage] = useState(3); // Adjust the number of subscribers per page

    const [user] = useAuthState(auth);
    const [employee, setEmployee] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/employees/${id}`)
            .then((res) => res.json())
            .then((info) => setEmployee(info));
    }, []);



    useEffect(() => {
        fetch(`http://localhost:5000/projects`)
            .then((res) => res.json())
            .then((info) => setProjects(info.reverse())); // Reverse the array initially
    }, []);



    // Pagination for Orders
    const indexOfLastOrder = currentPageOrders * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentProjects = projects.slice(indexOfFirstOrder, indexOfLastOrder);





    const paginateOrders = (pageNumber) => setCurrentPageOrders(pageNumber);

    return (
        <>
            <HeaderBottom></HeaderBottom>
            <div>
                <section id="services" className="services-area pt-4 pb-4 mt-4 mb-100">

                    <div className="container">



                        <div className="row">
                            <div className="col-md-12">
                                <div className='d-flex justify-content-end'><Link className='  xb-btn xb-btn--advisor mb-5' to={`/add-project/${employee._id}`}>Add Project</Link></div>
                                <h2>Total Project</h2>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sl.</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Project Name</th>
                                            <th scope="col">Budget</th>
                                            <th scope="col">Advance</th>
                                            <th scope="col">Due</th>
                                            <th scope="col">Project Status</th>
                                            <th scope="col">Edit</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentProjects.map((project, index) => project.employeeId === employee._id && (
                                            <tr key={project._id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{project.projectDate}</td>
                                                <td>{project.projectName}</td>
                                                <td>${project.projectBudget}</td>
                                                <td>${project.advancePayment}</td>
                                                <td>${project.duePayment}</td>
                                                <td>{project.projectStatus}</td>
                                                <td><Link to={`/edit-project/${project._id}`}>  <img src="https://i.ibb.co/6FgrxJ7/edit-1.png" alt="shape" /></Link></td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                {/* Bootstrap Pagination for Orders */}
                                <nav aria-label="Orders Page Navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className={`page-item ${currentPageOrders === 1 ? 'disabled' : ''}`}>
                                            <a className="page-link" onClick={() => paginateOrders(currentPageOrders - 1)} href="javascript:void(0)" tabIndex="-1">Previous</a>
                                        </li>
                                        {Array.from({ length: Math.ceil(projects.length / ordersPerPage) }, (_, i) => (
                                            <li key={i} className={`page-item ${currentPageOrders === i + 1 ? 'active' : ''}`}>
                                                <a className="page-link" onClick={() => paginateOrders(i + 1)} href="javascript:void(0)">
                                                    {i + 1}
                                                </a>
                                            </li>
                                        ))}
                                        <li className={`page-item ${currentPageOrders === Math.ceil(projects.length / ordersPerPage) ? 'disabled' : ''}`}>
                                            <a className="page-link" onClick={() => paginateOrders(currentPageOrders + 1)} href="javascript:void(0)">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>


                    </div>


                </section>
            </div>
        </>
    );
};

export default Projects;
