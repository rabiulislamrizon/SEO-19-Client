import React, { useEffect, useState } from 'react';
import HeaderBottom from '../../components/HomePage/HeaderBottom';
import AdminMenu from '../../components/AdminMenu';

const Subscribers = () => {
    const [subscribers, setSubscribers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [subscribersPerPage] = useState(5); // Adjust the number of subscribers per page

    useEffect(() => {
        fetch(`http://localhost:5000/subscribers`)
            .then((res) => res.json())
            .then((info) => setSubscribers(info.reverse())); // Reverse the array initially
    }, []);

    // Pagination for Subscribers
    const indexOfLastSubscriber = currentPage * subscribersPerPage;
    const indexOfFirstSubscriber = indexOfLastSubscriber - subscribersPerPage;
    const currentSubscribers = subscribers.slice(indexOfFirstSubscriber, indexOfLastSubscriber);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (

        
        <>
        <HeaderBottom></HeaderBottom>

        
          <section id="services" className="services-area pt-120 pb-90 fix mb-5 mt-5">
            <div className="container">
                <div className="row"></div>
                <div className="row">
                    <h3>Total Subscribers</h3>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Sl No.</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentSubscribers.map((subscribe, index) => (
                                <tr key={subscribe._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{subscribe.subemail}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Bootstrap Pagination for Subscribers */}
                    <nav aria-label="Subscribers Page Navigation">
                        <ul className="pagination justify-content-center">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <span className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</span>
                            </li>
                            {Array.from({ length: Math.ceil(subscribers.length / subscribersPerPage) }, (_, i) => (
                                <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                    <span className="page-link" onClick={() => paginate(i + 1)}>
                                        {i + 1} {currentPage === i + 1 && <span className="sr-only">(current)</span>}
                                    </span>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === Math.ceil(subscribers.length / subscribersPerPage) ? 'disabled' : ''}`}>
                                <span className="page-link" onClick={() => paginate(currentPage + 1)}>Next</span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
        </>
      
    );
};

export default Subscribers;
