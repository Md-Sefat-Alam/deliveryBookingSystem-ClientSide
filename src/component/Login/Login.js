import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useLocation, useHistory, NavLink } from 'react-router-dom';


const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const { signInUsingGoogle, setUser, setMessage, setIsLoading } = useAuth();

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                setMessage('Login Successful')
                history.push(redirect_uri)
            })
            .catch(error => {
                setMessage(error.code);
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <div style={{ minHeight: '90vh' }} className='container'>

            <div className='d-flex flex-column justify-content-center'>
                <NavLink to="/home" className="navbar-brand text-secondary fs-4 fw-bold" >Delivery <span className='text-warning'>Booking</span> System</NavLink>

                <div>
                    <button className="btn btn-primary d-flex justify-content-start" onClick={handleGoogleLogin}>

                    </button>
                </div>
            </div>

        </div>
    );
};

export default Login;