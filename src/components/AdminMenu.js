import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gear from "./Images/gear.png";
import orders from './Images/orders.png';
import msg from './Images/message.png';
import sub from './Images/subscriber.png';
import payment from './Images/paypal.png';
import emailicon from './Images/email.png';
import employee from './Images/employee.png';
import video from './Images/video-player.png';
import emailtem from './Images/newsletter.png';
import graphics from './Images/web-design.png';
import videotew from './Images/video-tutorials.png';
import './AdminMenu.css';

const AdminMenu = () => {
    const [paypal, setPaypal] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/paypal-email`)
            .then((res) => res.json())
            .then((info) => setPaypal(info));
    }, []);

    return (
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                    <div className='single-card d-flex justify-content-center'>
                        <Link to='/setting'>
                            <div className='icon-img'><img src={gear} alt="Setting" /></div>
                            <p>Setting</p>
                        </Link>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                    <div className='single-card d-flex justify-content-center'>
                        <Link to='/total-orders'>
                            <div className='icon-img'><img src={orders} alt="Total Orders" /></div>
                            <p>Total Orders</p>
                        </Link>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                    <div className='single-card d-flex justify-content-center'>
                        <Link to='/all-messages'>
                            <div className='icon-img'><img src={msg} alt="Messages" /></div>
                            <p>Messages</p>
                        </Link>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                    <div className='single-card d-flex justify-content-center'>
                        <Link to='/admin-support'>
                            <div className='icon-img'><img src="https://i.ibb.co/Mph1Pbj/support.png" alt="Messages" /></div>
                            <p>Supports </p>
                        </Link>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                    <div className='single-card d-flex justify-content-center'>
                        <Link to='/all-subscriber'>
                            <div className='icon-img'><img src={sub} alt="Subscribers" /></div>
                            <p>Subscribers</p>
                        </Link>
                    </div>
                </div>


                <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                    <div className='single-card d-flex justify-content-center'>
                        <Link to='/employees'>
                            <div className='icon-img'><img src={employee} alt="Employees" /></div>
                            <p>Employees</p>
                        </Link>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                    <div className='single-card d-flex justify-content-center'>
                        <Link to='/video-template'>
                            <div className='icon-img'><img src={video} alt="Employees" /></div>
                            <p>Editable Videos</p>
                        </Link>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                    <div className='single-card d-flex justify-content-center'>
                        <Link to='/graphic-template'>
                            <div className='icon-img'><img src={graphics} alt="Employees" /></div>
                            <p>Editable Graphics</p>
                        </Link>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                    <div className='single-card d-flex justify-content-center'>
                        <Link to='/email-template'>
                            <div className='icon-img'><img src={emailtem} alt="Employees" /></div>
                            <p>Email Templates</p>
                        </Link>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                    <div className='single-card d-flex justify-content-center'>
                        <Link to='/video-tutorial'>
                            <div className='icon-img'><img src={videotew} alt="Employees" /></div>
                            <p>Video Tutorials</p>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminMenu;
