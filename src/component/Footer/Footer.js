import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{ minHeight: '250px', overflow: 'hidden' }} className='bg-dark text-white'>
            <div className='container d-flex flex-column flex-md-row justify-content-around'>
                <div style={{ userSelect: 'none', minHeight: '200px' }} className="d-flex flex-column align-items-center justify-content-center">
                    <NavLink to="/home" className="navbar-brand text-secondary fs-4 fw-bold" >Delivery <span className='text-warning'>Booking</span> System</NavLink>
                </div>
                <div style={{ minHeight: '200px' }} className='d-flex flex-column align-items-center justify-content-center'>
                    <div>
                        <h5>Go to...</h5>
                        <ul>
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/booking'>Booking/ Order</Link></li>
                            <li><Link to='/set-own-offer'>Set own offers</Link></li>
                            <li><Link to='/my-orders'>My Orders</Link></li>
                            <li><Link to='/manage-all-orders'>Manage All Orders</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <h6 className='text-center bg-dark'>&copy; All Right Reserved by <NavLink to="/home" className="navbar-brand text-secondary fs-6 fw-bold" >Delivery <span className='text-warning'>Booking</span> System</NavLink></h6>
            </div>
        </div>
    );
};

export default Footer;