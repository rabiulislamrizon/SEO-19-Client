import React, { useEffect, useState } from 'react';
import './ChatBoard.css'; // Optional: For styling

import { Link } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import HeaderBottom from '../components/HomePage/HeaderBottom';


const AdminSupport = () => {
  const [User] = useAuthState(auth);
  const [tickets, setTickets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    fetch('http://localhost:5000/ticket')
      .then((res) => res.json())
      .then((info) => setTickets(info.reverse()))
      .catch((error) => console.error('Error fetching tickets:', error));
  }, []);

  // Calculate current tickets for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTickets = tickets.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Handle Previous and Next buttons
  const handlePrevPage = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  const handleNextPage = () => setCurrentPage((nextPage) => Math.min(nextPage + 1, Math.ceil(tickets.length / itemsPerPage)));

  // Generate pagination items
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(tickets.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <HeaderBottom />
      <section id="services" className="services-area vh-100">
        <div className="container">
          <div className="row">
            <div className="col-12">

              <h2 className="mt-5 mb-5">All Support Messages</h2>

              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Sl No.</th>
                      <th scope="col">Ticket Date</th>
                      <th scope="col">Customer Email</th>
                      <th scope="col">Name</th>
                      <th scope="col">Subject</th>
                      <th scope="col">Ticket Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentTickets.map((t, index) => (
                      <tr key={t._id}>
                        <th scope="row">{indexOfFirstItem + index + 1}</th>
                        <td>{t.tickteDate}</td>
                        <td>{t.customerEmail}</td>
                        <td>{t.ticketName}</td>
                        <td>{t.ticketsubject}</td>
                        <td>
                          {t.ticketStatus === 'UnRead' && (
                            <Link className="btn btn-primary" to={`/admin-message-now/${t._id}`}>
                              Message Now
                            </Link>
                          )}
                          {t.ticketStatus === 'Read' && (
                            <span>Already Read</span>
                          )}
                        </td>
                        <td>
                          <Link to={`/ticket-status/${t._id}`}>
                            <img src="https://i.ibb.co/6FgrxJ7/edit-1.png" alt="edit" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="d-flex justify-content-center mt-3">
                <Pagination>
                  <Pagination.Prev onClick={handlePrevPage} disabled={currentPage === 1} />
                  {pageNumbers.map((number) => (
                    <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
                      {number}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next onClick={handleNextPage} disabled={currentPage === pageNumbers.length} />
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminSupport;