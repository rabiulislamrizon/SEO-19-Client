import React, { useEffect, useState } from 'react';
import './UserDashboard.css';
import { Link } from 'react-router-dom';
import support from './Images/support.png'
import checkout from './Images/checkout.png'
import dollar from './Images/dollar-sign.png'
import "./UserDashboardMenu.css"
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const UserDashboardMenu = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);


    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then((res) => res.json())
            .then((info) => setOrders(info));
    }, []);

    const paidOrders = orders.filter(order => order.paymentStatus === 'Paid' && order.customerEmail === user?.email);
    const totalSpent = paidOrders.reduce((total, order) => total + parseFloat(order.packagePrice), 0)



    return (
        <div className='container'>
            <div className='row justify-content-center mt-5 mb-5'>
                <div className='single-card d-flex justify-content-center col-lg-3 col-md-5 col-sm-10 '>
                    <Link to='/my-order'> <div className='icon-img' ><img src={checkout} /></div> <p>My Orders</p></Link>
                </div>
                <div className='single-card d-flex justify-content-center col-lg-3 col-md-5 col-sm-10'>
                    <Link to='/'> <div className='icon-img' ><img src={dollar} /></div> <p>Total Spent $ {totalSpent.toFixed(2)} USD</p></Link>
                </div>
                <div className='single-card d-flex justify-content-center col-lg-3 col-md-5 col-sm-10'>
                    <Link to='/support'> <div className='icon-img' ><img src={support} /></div> <p>Support</p></Link>
                </div>
            </div>
        </div>
    );
};

export default UserDashboardMenu;
