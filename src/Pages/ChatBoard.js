import React, { useEffect, useState } from 'react';
import './ChatBoard.css'; // Optional: For styling

import { Link } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';

import HeaderBottom from '../components/HomePage/HeaderBottom';
import auth from '../firebase.init';

const ChatBoard = () => {
  const [user] = useAuthState(auth);
  const [tickets, setTickets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    fetch(`http://localhost:5000/ticket?email=${user?.email}`)
      .then((res) => res.json())
      .then((info) => setTickets(info.reverse()))
      .catch((error) => console.error('Error fetching tickets:', error));
  }, [user?.email]);

  // Calculate current tickets for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTickets = tickets.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Handle Previous and Next buttons
  const handlePrevPage = () => setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  const handleNextPage = () => setCurrentPage(nextPage => Math.min(nextPage + 1, Math.ceil(tickets.length / itemsPerPage)));

  // Generate pagination items
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(tickets.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <><HeaderBottom></HeaderBottom>
      <section id="services" className="services-area vh-100">
        <div className="container">
          <div className="row">
            <div>
              <div className="container">
                <Link to="/create-ticket" className="btn btn-primary mb-3">
                  Create Ticket
                </Link>
              </div>

              <h2 className='mt-5 mb-5'>My Tickets</h2>

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
                      <th scope="col">Message Now</th>
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
                          {t.ticketStatus === 'UnRead' && <p>UnRead</p>}
                          {t.ticketStatus === 'Read' && <p>Read</p>}
                        </td>
                        <td>
                          <Link className="btn btn-primary" to={`/message-now/${t._id}`}>
                            Message Now
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="d-flex justify-content-center">
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

export default ChatBoard;