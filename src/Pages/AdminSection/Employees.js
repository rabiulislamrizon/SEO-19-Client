import React, { useEffect, useState } from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Employees = () => {
   
    const [empolyes, setEmployee] = useState([]);
    const [currentPageOrders, setCurrentPageOrders] = useState(1);
 
    const [ordersPerPage] = useState(10); // Adjust the number of orders per page
   

    const [user] = useAuthState(auth);

    

    useEffect(() => {
        fetch(`http://localhost:5000/employees`)
            .then((res) => res.json())
            .then((info) => setEmployee(info.reverse())); // Reverse the array initially
    }, []);

  

    // Pagination for Orders
    const indexOfLastOrder = currentPageOrders * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = empolyes.slice(indexOfFirstOrder, indexOfLastOrder);

   
   
  

    const paginateOrders = (pageNumber) => setCurrentPageOrders(pageNumber);


    return (
        <>
            <HeaderBottom></HeaderBottom>
            <div>
                <section id="services" className="services-area pt-4 pb-4 mt-4 mb-100">
                   
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                               
                                <div className='d-flex justify-content-end'>
                                <Link className='  xb-btn xb-btn--advisor mb-5' to="/add-employee">Add Employee</Link></div>
                              
                                 
                                </div>
                                
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Total Employees</h2>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Sl.</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Title/Role</th>
                                                <th scope="col">Project</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentOrders.map((empolyes, index) => (
                                                <tr key={empolyes._id}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{empolyes.EmployeeName}</td>
                                                    <td>{empolyes.EmployeeEmail}</td>
                                                    <td>{empolyes.EmployeeRole}</td>
                                                    <td><Link className='  xb-btn xb-btn--advisor' to={`/project/${empolyes._id}`}>Project</Link></td>
                                                    
                                                    <td><Link  to={`/edit-employee/${empolyes._id}`}>  <img src="https://i.ibb.co/6FgrxJ7/edit-1.png" alt="shape" /></Link></td>
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
                                            {Array.from({ length: Math.ceil(empolyes.length / ordersPerPage) }, (_, i) => (
                                                <li key={i} className={`page-item ${currentPageOrders === i + 1 ? 'active' : ''}`}>
                                                    <a className="page-link" onClick={() => paginateOrders(i + 1)} href="javascript:void(0)">
                                                        {i + 1}
                                                    </a>
                                                </li>
                                            ))}
                                            <li className={`page-item ${currentPageOrders === Math.ceil(empolyes.length / ordersPerPage) ? 'disabled' : ''}`}>
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

export default Employees;
