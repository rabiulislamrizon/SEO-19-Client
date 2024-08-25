import React, { useEffect, useState } from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';
import AdminMenu from '../../components/AdminMenu';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const TotalOrders = () => {
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage] = useState(10); // Adjust the number of orders per page

    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then((res) => res.json())
            .then((info) => setOrders(info.reverse())); // Reverse the array initially
    }, []);

    // Pagination for Orders
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <HeaderBottom></HeaderBottom>

            <section id="services" className="services-area  pb-90 fix mb-5 mt-5">
                <div className="container">
                    <div className="row"></div>
                    <div className="row">
                        <div>



                            <h2>Total Orders</h2>
                            <div className="container table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">SL.</th>
                                            <th scope="col">Order Date</th>
                                            <th scope="col">Customer Name</th>
                                            <th scope="col">Customer Email</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Order Status</th>
                                            <th scope="col">Payment Status</th>
                                            <th scope="col">Payment Method</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentOrders.map((order, index) => (
                                            <tr key={order._id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{order.orderDate}</td>
                                                <td>{order.customerName}</td>
                                                <td>{order.customerEmail}</td>
                                                <td>${order.packagePrice}</td>
                                                <td>{order.orderStatus}</td>
                                                <td>{order.paymentStatus}</td>
                                                <td>PayPal</td>
                                                <td><Link className=' btn btn-primary' to={`/admin/payment-status/${order._id}`}>Edit Status</Link></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>


                            {/* Bootstrap Pagination for Orders */}
                            <nav aria-label="Orders Page Navigation">
                                <ul className="pagination">
                                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                        <span className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</span>
                                    </li>
                                    {Array.from({ length: Math.ceil(orders.length / ordersPerPage) }, (_, i) => (
                                        <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                            <span className="page-link" onClick={() => paginate(i + 1)}>
                                                {i + 1} {currentPage === i + 1 && <span className="sr-only"></span>}
                                            </span>
                                        </li>
                                    ))}
                                    <li className={`page-item ${currentPage === Math.ceil(orders.length / ordersPerPage) ? 'disabled' : ''}`}>
                                        <span className="page-link" onClick={() => paginate(currentPage + 1)}>Next</span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TotalOrders;
