import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, message } = useAuth();
    console.log(user, message);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink to="/home" className="navbar-brand text-secondary fs-4 fw-bold" >Delivery <span className='text-warning'>Booking</span> System</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
                        <li className="nav-item">
                            <NavLink activeClassName="selected" to="/home" className="nav-link active" aria-current="page" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="selected" to="/booking" className="nav-link" >Add a new Booking/ Order</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="selected" to="/set-own-offer" className="nav-link" >Set Own Offer</NavLink>
                        </li>
                    </ul>
                    <div>
                        <div className="nav-item">
                            {
                                user.accessToken ? <div>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        overflow: 'hidden',
                                        cursor: 'pointer'
                                    }}>
                                        <span className="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            <img className='img-fluid' src={user.photoURL} alt="user_photo" />
                                        </span>
                                    </div>
                                </div>
                                    :
                                    <NavLink activeClassName="selected" to="/login" className="nav-link text-warning" >login</NavLink>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;